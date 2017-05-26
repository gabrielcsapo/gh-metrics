"use strict"

const Github = require('octonode');
const Async = require('async');
const Table = require('markdown-table');

module.exports = (options, callback) => {
    const user = options.user;
    const token = options.token;
    const keys = options.keys;
    const sort = options.sort;
    const sortAsc = options.sortAsc;
    const table = options.table;
    const client = Github.client(token);
    const ghuser = client.user(user);
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

    ghuser.repos((err, repos) => {
        if (err) {
            return after(err);
        }

        let response = [];
        Async.forEachOf(repos, (repo, value, callback) => {
            if (repo.fork == false) {
                Object.keys(repo).forEach((k) => {
                    if (keys.indexOf(k) == -1) {
                        delete repo[k];
                    }
                });
                var ghrepo = client.repo(repo.full_name);
                Async.waterfall([
                     (callback) => {
                        if (keys.indexOf('languages') > -1) {
                            ghrepo.languages((err, languages) => {
                                if (err) {
                                    return callback(err);
                                }
                                repo.languages = languages;
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    (callback) => {
                        if (keys.indexOf('last_contribution') > -1) {
                            ghrepo.commits((err, commits) => {
                                if (err) {
                                    return callback(err);
                                }
                                repo.last_contribution = commits[0].commit.author.date;
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    (callback) => {
                        if (keys.indexOf('days_stagnant') > -1) {
                            ghrepo.commits((err, commits) => {
                                if (err) {
                                    return callback(err);
                                }
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
                            ghrepo.contributors((err, contributors) => {
                                if (err) {
                                    return callback(err);
                                }
                                repo.commits = contributors.map((a) => {
                                        return a.contributions;
                                    })
                                    .reduce((a, b) => {
                                        return a + b;
                                    });
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    (callback) => {
                        if (keys.indexOf('health') > -1) {
                            ghrepo.commits((err, commits) => {
                                if (err) {
                                    return callback(err);
                                }
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
                    }
                ], (err) => {
                    if (err) {
                        return callback(err);
                    }
                    callback();
                });
            } else {
                callback();
            }
        }, (err) => {
            if (err) {
                return after(err, undefined);
            }
            // Lets do some sorting
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
