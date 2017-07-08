"use strict"

const Github = require('github');
const Async = require('async');
const Table = require('markdown-table');
const debug = require('debug')('github-metrics')

module.exports = (options, callback) => {
    const user = options.user;
    const token = options.token;
    const keys = options.keys;
    const sort = options.sort;
    const sortAsc = options.sortAsc;
    const table = options.table;
    const page = options.page || 0;
    const limit = options.limit || 20;
    const client = Github({
        debug: false,
        protocol: 'https',
        host: 'api.github.com',
        headers: {
            "Accept": ["application/vnd.github.mercy-preview+json"]
        }
    });
    if(token) {
        client.authenticate({
            type: 'token',
            token
        });
    }

    const after = (error, result) => {
      if(error) { return callback(error, undefined); }
      if(!table) {
        return callback(undefined, JSON.stringify(result, null, 4));
      } else {
        const table = [keys];

        result.forEach(function(m) {
            let row = [];
            keys.forEach(function(key) {
                row.push(m[key] ? JSON.stringify(m[key]) : m[key]);
            });
            table.push(row);
        });
        return callback(undefined, Table(table));
      }
    }

    client.repos.getForUser({
        username: user,
        page: page,
        per_page: limit,
    }, (err, data) => {
        if (err) {
            return after(err);
        }
        const repos = data.data;

        let response = [];
        Async.forEachOf(repos, (repo, value, callback) => {
            if (repo.fork == false) {
                const rawRepo = Object.assign({}, repo); // to get keys that might not be included in what the user wants but we need

                Object.keys(repo).forEach((k) => {
                    if (keys.indexOf(k) == -1) {
                        delete repo[k];
                    }
                });
                Async.waterfall([
                     (callback) => {
                        if (keys.indexOf('languages') > -1) {
                            client.repos.getLanguages({
                                owner: user,
                                repo: rawRepo.name
                            }, (err, data) => {
                                if (err) {
                                    debug(err);
                                    return callback();
                                }
                                const languages = data.data;

                                repo.languages = languages;
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    (callback) => {
                        if (keys.indexOf('last_contribution') > -1) {
                            client.repos.getCommits({
                                owner: user,
                                repo: rawRepo.name
                            }, (err, data) => {
                                if (err) {
                                    debug(err);
                                    return callback();
                                }
                                const commits = data.data;

                                repo.last_contribution = commits[0].commit.author.date;
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    (callback) => {
                        if (keys.indexOf('days_stagnant') > -1) {
                            client.repos.getCommits({
                                owner: user,
                                repo: rawRepo.name
                            }, (err, data) => {
                                if (err) {
                                    debug(err);
                                    return callback();
                                }
                                const commits = data.data;

                                let last = new Date(commits[0].commit.author.date);
                                let today = new Date();
                                let diff = Math.abs(last - today);
                                repo.days_stagnant = Math.round(diff / (1000 * 60 * 60 * 24));
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    (callback) => {
                        if (keys.indexOf('commits') > -1) {
                            client.repos.getContributors({
                                owner: user,
                                repo: rawRepo.name
                            }, (err, data) => {
                                if (err) {
                                    debug(err);
                                    return callback();
                                }
                                const contributors = data.data;

                                repo.commits = contributors.map((a) => {
                                        return a.contributions;
                                    })
                                    .reduce((a, b) => {
                                        return a + b;
                                    }, 0);
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    (callback) => {
                        if (keys.indexOf('health') > -1) {
                            client.repos.getCommits({
                                owner: user,
                                repo: rawRepo.name
                            }, (err, data) => {
                                if (err) {
                                    debug(err);
                                    return callback();
                                }
                                const commits = data.data;

                                let last = new Date(commits[0].commit.author.date);
                                let today = new Date();
                                let diff = Math.abs(last - today);
                                let days_stagnant = Math.round(diff / 86400000);
                                let health = '🌩';
                                if(days_stagnant < 30) {
                                    health = '🌞';
                                } else if(days_stagnant > 30 && days_stagnant < 60) {
                                    health = '⛅️';
                                } else if (days_stagnant > 60 && days_stagnant < 90) {
                                    health = '🌦';
                                }
                                repo.health = health;
                                response.push(repo);
                                callback();
                            });
                        } else {
                            response.push(repo);
                            callback();
                        }
                    },
                    (callback) => {
                       if (keys.indexOf('topics') > -1) {
                           repo.topics = repo.topics.join(', ');
                           callback();
                       } else {
                           callback();
                       }
                   },
                   (callback) => {
                       if (keys.indexOf('deprecated') > -1) {
                           // First check for the deprecated topics to exist
                           if(rawRepo.topics && rawRepo.topics.indexOf('deprecated') > -1) {
                               repo.deprecated = 'true';
                               return callback();
                           }

                           // Fallback to readme checking in case it was not found in the topics
                           client.repos.getContent({
                               owner: user,
                               repo: rawRepo.name,
                               path: 'README.md'
                           }, (err, data) => {
                               if(err) {
                                   debug(err);
                                   return callback();
                               }
                               const readme = new Buffer(data.data.content, data.data.encoding).toString('utf8')
                               if(readme.match(/deprecated/ig)) {
                                  repo.deprecated = 'true';
                               }

                               callback();
                           });
                       } else {
                           callback();
                       }
                   },
                ], (err) => {
                    if (err) {
                        debug(err);
                        return callback(err);
                    }
                    callback();
                });
            } else {
                callback();
            }
        }, (err) => {
            if (err) {
                debug(err);
                return after(err, undefined);
            }
            // Let's do some sorting
            if(sort) {
                response = response
                .map((r, i) => [r[sort], i, r])
                .sort((l, r) => {
                    if(sortAsc) {
                        return l[0] < r[0] ? -1 : 1;
                    } else {
                        return l[0] > r[0] ? -1 : 1;
                    }
                })
                .map((o) => o[2]);
            }
            after(undefined, response);
        });

    });
}
