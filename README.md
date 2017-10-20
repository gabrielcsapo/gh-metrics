# gh-metrics

> a cli to track github stats across different users github repos

[![Npm Version](https://img.shields.io/npm/v/gh-metrics.svg)](https://www.npmjs.com/package/gh-metrics)
[![Build Status](https://travis-ci.org/gabrielcsapo/gh-metrics.svg?branch=master)](https://travis-ci.org/gabrielcsapo/gh-metrics)
[![Coverage Status](https://lcov-server.gabrielcsapo.com/badge/github%2Ecom/gabrielcsapo/gh-metrics.svg)](https://lcov-server.gabrielcsapo.com/coverage/github%2Ecom/gabrielcsapo/gh-metrics)
[![Dependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/gh-metrics/status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/gh-metrics)
[![devDependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/gh-metrics/dev-status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/gh-metrics#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/gh-metrics.svg)]()
[![npm](https://img.shields.io/npm/dm/gh-metrics.svg)]()

## Installation

`npm install gh-metrics -g`

## Usage

> command-line

```
Usage: gh-metrics [options]


Options:

  -V, --version                 output the version number
  -u, --user [user]             the name of the user that you want to get metrics for.
  -t, --token [token]           github access token to make requests.
  -k, --keys [keys]             keys to be passed to make the table based on the comma seperated keys you provide.
  -s, --sort [sort]             key to be used to sort against the returned value
  -a, --asc                     by default the sorting is descending if this is selected it will be ascending
  -p, --page [page]             the page to start the search at, by default the limit is only 100, so pagination is necessary
  -l, --limit [limit]           limit the number of repos that are being returned
  --table                       output a table of the data
  --github-protocol [protocol]  the protocol to query github
  --github-host [url]           the url of the github instance to query
  --github-debug                a flag that allows debug logs from the github client
  --github-pathPrefix [prefix]  a prefix for the path for github
  -h, --help                    output usage information
```

> examples

`gh-metrics --user gabrielcsapo` // this will call github using the public api

`gh-metrics --user gabrielcsapo --token {token}` // this will make the call with an authenticated token

Debugging any errors that occur during your call please preface with `DEBUG=gh-metrics` and example would look like

```
DEBUG=gh-metrics gh-metrics --user gabrielcsapo
```

> programatic

```javascript
const Metrics = require('gh-metrics');
Metrics({
    user: '',
    token: '',
    keys: [],
    sort: '',
    sortAsc: false,
    limit: 10
}, function(err, metrics) { });
```

### Keys Available

```javascript
[
  'archive_url',
  'assignees_url',
  'blobs_url',
  'branches_url',
  'clone_url',
  'collaborators_url',
  'comments_url',
  'commits',
  'commits_url',
  'compare_url',
  'contents_url',
  'contributors_url',
  'created_at',
  'days_stagnant',
  'default_branch',
  'deployments_url',
  'description',
  'deprecated',
  'downloads_url',
  'events_url',
  'fork',
  'forks',
  'forks_count',
  'forks_url',
  'full_name',
  'git_commits_url',
  'git_refs_url',
  'git_tags_url',
  'git_url',
  'has_downloads',
  'has_issues',
  'has_pages',
  'has_wiki',
  'health',
  'homepage',
  'hooks_url',
  'html_url',
  'id',
  'issue_comment_url',
  'issue_events_url',
  'issues_url',
  'keys_url',
  'labels_url',
  'language',
  'languages',
  'languages_url',
  'last_contribution',
  'merges_url',
  'milestones_url',
  'mirror_url',
  'name',
  'notifications_url',
  'open_issues',
  'open_issues_count',
  'owner',
  'permissions',
  'private',
  'pulls_url',
  'pushed_at',
  'releases_url',
  'size',
  'ssh_url',
  'stargazers_count',
  'stargazers_url',
  'statuses_url',
  'subscribers_url',
  'subscription_url',
  'svn_url',
  'tags_url',
  'teams_url',
  'trees_url',
  'topics',
  'updated_at',
  'url',
  'watchers',
  'watchers_count'
 ]
 ```

## Example

`gh-metrics --user gabrielcsapo --keys 'full_name, homepage, commits, open_issues_count, days_stagnant, health' --sort 'days_stagnant' --asc --table`

| full_name                                       | homepage                                       | commits | open_issues_count | days_stagnant | health |
| ----------------------------------------------- | ---------------------------------------------- | ------- | ----------------- | ------------- | ------ |
| "gabrielcsapo/json-ex"                          | "http://www.gabrielcsapo.com/json-ex/"         | 6       | 0                 | 1             | "🌞"   |
| "gabrielcsapo/node-git-server"                  | "http://www.gabrielcsapo.com/node-git-server/" | 27      | 2                 | 6             | "🌞"   |
| "gabrielcsapo/node-notebook"                    | "http://www.gabrielcsapo.com/node-notebook/"   | 144     | 2                 | 7             | "🌞"   |
| "gabrielcsapo/gabrielcsapo.github.io"           | "http://www.gabrielcsapo.com"                  | 77      | 2                 | 7             | "🌞"   |
| "gabrielcsapo/psychic-ui"                       | "http://www.gabrielcsapo.com/psychic-ui/"      | 130     | 1                 | 10            | "🌞"   |
| "gabrielcsapo/lcov-server"             | "https://lcov-server.gabrielcsapo.com/"  | 80      | 7                 | 21            | "🌞"   |
| "gabrielcsapo/espyjs"                           |                                                | 6       | 0                 | 27            | "🌞"   |
| "gabrielcsapo/psychic"                          | "http://www.gabrielcsapo.com/psychic/"         | 8       | 2                 | 45            | "⛅️"   |
| "gabrielcsapo/monotime"                         | "http://www.gabrielcsapo.com/monotime/"        | 5       | 0                 | 51            | "⛅️"   |
| "gabrielcsapo/node-tester"                      |                                                | 4       | 0                 | 95            | "🌩"   |
| "gabrielcsapo/prompt"                           |                                                | 17      | 0                 | 99            | "🌩"   |
| "gabrielcsapo/node-distribute"                  | "http://www.gabrielcsapo.com/node-distribute/" | 124     | 7                 | 101           | "🌩"   |
| "gabrielcsapo/gh-metrics"                   |                                                | 40      | 2                 | 131           | "🌩"   |
| "gabrielcsapo/granary-server"                   | "http://granaryjs.com"                         | 168     | 1                 | 135           | "🌩"   |
| "gabrielcsapo/compress-object"                  | "http://www.gabrielcsapo.com/compress-object/" | 22      | 1                 | 141           | "🌩"   |
| "gabrielcsapo/node-chat-rooms"                  | "http://www.gabrielcsapo.com/node-chat-rooms/" | 71      | 1                 | 148           | "🌩"   |
| "gabrielcsapo/npm-what"                         |                                                | 33      | 3                 | 149           | "🌩"   |
| "gabrielcsapo/grunt-screenshot"                 |                                                | 53      | 1                 | 170           | "🌩"   |
| "gabrielcsapo/node-dashboard"                   |                                                | 79      | 2                 | 259           | "🌩"   |
| "gabrielcsapo/node-flat-db"                     |                                                | 226     | 0                 | 264           | "🌩"   |
| "gabrielcsapo/node-timecapsule"                 |                                                | 7       | 0                 | 271           | "🌩"   |
| "gabrielcsapo/granary"                          | "http://granaryjs.com"                         | 65      | 0                 | 291           | "🌩"   |
| "gabrielcsapo/node-document-parser"             |                                                | 10      | 0                 | 301           | "🌩"   |
| "gabrielcsapo/mocha-markdown-extended-reporter" |                                                | 2       | 0                 | 317           | "🌩"   |
| "gabrielcsapo/granary-sample"                   |                                                | 5       | 0                 | 376           | "🌩"   |
| "gabrielcsapo/dobby"                            |                                                | 11      | 0                 | 645           | "🌩"   |
