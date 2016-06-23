var _ = require('underscore');
var github = require('octonode');
var client = github.client('af7a395c3f2b34c21b982e1a520d054c79939dc7');
var async = require('async');

module.exports = function(user, callback) {
    var ghuser = client.user(user);

    ghuser.repos(function(err, repos) {
        var response = [];

        async.forEachOf(repos, function(repo, value, callback) {
            if (repo.fork == false) {
                var repo = _.pick(repo, 'name', 'full_name', 'homepage', 'description', 'created_at', 'git_url', 'stargazers_count', 'watchers', 'open_issues_count', 'size');
                var ghrepo = client.repo(repo.full_name);
                async.waterfall([
                    function(callback) {
                        ghrepo.languages(function(err, languages) {
                            repo.languages = languages;
                            callback();
                        });
                    },
                    function(callback) {
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
                    }
                ], function() {
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
