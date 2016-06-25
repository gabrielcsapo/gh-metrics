var github = require('octonode');
var async = require('async');

module.exports = function(user, token, keys, callback) {
    var client = github.client(token);
    var ghuser = client.user(user);

    ghuser.repos(function(err, repos) {
        if (err) {
            throw err;
        }
        var response = [];

        async.forEachOf(repos, function(repo, value, callback) {
            if (repo.fork == false) {
                Object.keys(repo).forEach(function(k) {
                    if (keys.indexOf(k) == -1) {
                        delete repo[k];
                    }
                });
                var ghrepo = client.repo(repo.full_name);
                async.waterfall([
                    function(callback) {
                        if (keys.indexOf('languages') > -1) {
                            ghrepo.languages(function(err, languages) {
                                repo.languages = languages;
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    function(callback) {
                        if (keys.indexOf('last_contribution') > -1) {
                            ghrepo.commits(function(err, commits) {
                                repo.last_contribution = commits[0].commit.author.date;
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    function(callback) {
                        if (keys.indexOf('days_stagnant') > -1) {
                            ghrepo.commits(function(err, commits) {
                                var last = new Date(commits[0].commit.author.date);
                                var today = new Date();
                                var diff = Math.abs(last - today);
                                repo.days_stagnant = Math.round(diff / (1000 * 60 * 60 * 24)) + ' days';
                                callback();
                            });
                        } else {
                            callback();
                        }
                    },
                    function(callback) {
                        if (keys.indexOf('commits') > -1) {
                            ghrepo.contributors(function(err, contributors) {
                                repo.commits = contributors.map(function(a) {
                                        return a.contributions;
                                    })
                                    .reduce(function(a, b) {
                                        return a + b;
                                    });
                                response.push(repo);
                                callback();
                            });
                        } else {
                            response.push(repo);
                            callback();
                        }
                    }
                ], function(err) {
                    callback();
                });
            } else {
                callback();
            }
        }, function(err) {
            callback(response);
        });

    });
}
