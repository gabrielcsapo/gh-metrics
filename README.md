# github-metrics
> a repo to track github stats across different users github repos

[![Npm Version](https://img.shields.io/npm/v/github-metrics.svg)](https://www.npmjs.com/package/github-metrics)
[![Build Status](https://travis-ci.org/gabrielcsapo/github-metrics.svg?branch=master)](https://travis-ci.org/gabrielcsapo/github-metrics)
[![Dependency Status](https://david-dm.org/gabrielcsapo/github-metrics.svg)](https://david-dm.org/gabrielcsapo/github-metrics)
[![devDependency Status](https://david-dm.org/gabrielcsapo/github-metrics/dev-status.svg)](https://david-dm.org/gabrielcsapo/github-metrics#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/github-metrics.svg)]()
[![npm](https://img.shields.io/npm/dm/github-metrics.svg)]()

## Installation

`npm install github-metrics -g`

## Usage

> command-line

`github-metrics --user gabrielcsapo` // this will call github using the public api

`github-metrics --user gabrielcsapo --token {token}` // this will make the call with an authenticated token

> programatic

```javascript
const Metrics = require('github-metrics');
Metrics({
    user: '',
    token: '',
    keys: [],
    sort: '',
    sortAsc: false
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
  'updated_at',
  'url',
  'watchers',
  'watchers_count'
 ]
 ```

## Example

`github-metrics --user gabrielcsapo --keys 'full_name, homepage, commits, open_issues_count, days_stagnant, health' --sort 'days_stagnant' --asc`

| full_name                                       | homepage                                       | commits | open_issues_count | days_stagnant | health |
| ----------------------------------------------- | ---------------------------------------------- | ------- | ----------------- | ------------- | ------ |
| "gabrielcsapo/granary-server"                   | "http://granaryjs.com"                         | 168     | 1                 | 0             | "🌞"   |
| "gabrielcsapo/gabrielcsapo.github.io"           | "http://www.gabrielcsapo.com"                  | 64      | 1                 | 1             | "🌞"   |
| "gabrielcsapo/quantified_self"                  |                                                | 66      | 5                 | 2             | "🌞"   |
| "gabrielcsapo/compress-object"                  | "http://www.gabrielcsapo.com/compress-object/" | 22      | 1                 | 6             | "🌞"   |
| "gabrielcsapo/psychic-ui"                       | "http://www.gabrielcsapo.com/psychic-ui/"      | 112     | 2                 | 7             | "🌞"   |
| "gabrielcsapo/psychic"                          | "http://www.gabrielcsapo.com/psychic/"         | 4       | 1                 | 7             | "🌞"   |
| "gabrielcsapo/github-metrics"                   |                                                | 33      | 3                 | 8             | "🌞"   |
| "gabrielcsapo/saywhat"                          | "http://www.gabrielcsapo.com/saywhat/"         | 63      | 0                 | 9             | "🌞"   |
| "gabrielcsapo/steno"                            | "http://www.gabrielcsapo.com/steno/"           | 26      | 1                 | 13            | "🌞"   |
| "gabrielcsapo/node-chat-rooms"                  | "http://www.gabrielcsapo.com/node-chat-rooms/" | 71      | 1                 | 13            | "🌞"   |
| "gabrielcsapo/npm-what"                         |                                                | 33      | 3                 | 14            | "🌞"   |
| "gabrielcsapo/node-git-server"                  |                                                | 8       | 2                 | 20            | "🌞"   |
| "gabrielcsapo/grunt-screenshot"                 |                                                | 53      | 1                 | 35            | "⛅️"   |
| "gabrielcsapo/node-distribute"                  | "http://www.gabrielcsapo.com/node-distribute/" | 123     | 4                 | 35            | "⛅️"   |
| "gabrielcsapo/node-cron-server"                 |                                                | 1       | 0                 | 51            | "⛅️"   |
| "gabrielcsapo/node-notebook"                    | "http://www.gabrielcsapo.com/node-notebook/"   | 129     | 3                 | 85            | "🌦"   |
| "gabrielcsapo/node-dashboard"                   |                                                | 79      | 2                 | 124           | "🌩"   |
| "gabrielcsapo/node-flat-db"                     |                                                | 226     | 0                 | 130           | "🌩"   |
| "gabrielcsapo/node-timecapsule"                 |                                                | 7       | 0                 | 136           | "🌩"   |
| "gabrielcsapo/granary"                          | "http://granaryjs.com"                         | 65      | 0                 | 156           | "🌩"   |
| "gabrielcsapo/node-document-parser"             |                                                | 10      | 0                 | 166           | "🌩"   |
| "gabrielcsapo/mocha-markdown-extended-reporter" |                                                | 2       | 0                 | 182           | "🌩"   |
| "gabrielcsapo/granary-sample"                   |                                                | 5       | 0                 | 241           | "🌩"   |
| "gabrielcsapo/dobby"                            |                                                | 11      | 0                 | 510           | "🌩"   |
| "gabrielcsapo/prompt"                           |                                                | 16      | 0                 | 605           | "🌩"   |
| "gabrielcsapo/tabular"                          |                                                | 9       | 0                 | 613           | "🌩"   |
