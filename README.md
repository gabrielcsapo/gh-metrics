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
var metrics = require('github-metrics');
metrics({
    user: '',
    token: '',
    keys: [],
    sort: '',
    sortAsc: false
}, function(res) { });
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

`github-metrics --user gabrielcsapo --keys 'full_name, homepage, commits, open_issues_count, days_stagnant, health' --sort 'days_stagnant'`

| commits | days_stagnant | full_name                                       | health | homepage                                       | open_issues_count |
| ------- | ------------- | ----------------------------------------------- | ------ | ---------------------------------------------- | ----------------- |
| 9       | 523           | "gabrielcsapo/tabular"                          | "🌩"   |                                                | 0                 |
| 16      | 515           | "gabrielcsapo/prompt"                           | "🌩"   |                                                | 0                 |
| 11      | 420           | "gabrielcsapo/dobby"                            | "🌩"   |                                                | 0                 |
| 5       | 151           | "gabrielcsapo/granary-sample"                   | "🌩"   |                                                | 0                 |
| 24      | 108           | "gabrielcsapo/steno"                            | "🌩"   | "http://www.gabrielcsapo.com/steno/"           | 1                 |
| 2       | 92            | "gabrielcsapo/mocha-markdown-extended-reporter" | "🌩"   |                                                | 0                 |
| 10      | 76            | "gabrielcsapo/node-document-parser"             | "🌩"   |                                                | 0                 |
| 60      | 70            | "gabrielcsapo/node-chat-rooms"                  | "🌩"   |                                                | 2                 |
| 30      | 70            | "gabrielcsapo/npm-what"                         | "🌩"   |                                                | 2                 |
| 121     | 70            | "gabrielcsapo/node-notebook"                    | "🌩"   | "http://www.gabrielcsapo.com/node-notebook/"   | 2                 |
| 167     | 66            | "gabrielcsapo/granary-server"                   | "🌩"   | "http://granaryjs.com"                         | 0                 |
| 51      | 66            | "gabrielcsapo/grunt-screenshot"                 | "🌩"   |                                                | 0                 |
| 65      | 66            | "gabrielcsapo/granary"                          | "🌩"   | "http://granaryjs.com"                         | 0                 |
| 66      | 60            | "gabrielcsapo/node-distribute"                  | "🌩"   |                                                | 1                 |
| 56      | 56            | "gabrielcsapo/gabrielcsapo.github.io"           | "🌩"   | "http://www.gabrielcsapo.com"                  | 1                 |
| 7       | 46            | "gabrielcsapo/node-timecapsule"                 | "🌩"   |                                                | 0                 |
| 107     | 43            | "gabrielcsapo/psychic-ui"                       | "🌩"   | "http://www.gabrielcsapo.com/psychic-ui/"      | 2                 |
| 17      | 43            | "gabrielcsapo/compress-object"                  | "🌩"   | "http://www.gabrielcsapo.com/compress-object/" | 0                 |
| 60      | 42            | "gabrielcsapo/saywhat"                          | "🌩"   | "http://www.gabrielcsapo.com/saywhat/"         | 0                 |
| 28      | 42            | "gabrielcsapo/github-metrics"                   | "🌩"   |                                                | 0                 |
| 227     | 39            | "gabrielcsapo/node-flat-db"                     | "🌩"   |                                                | 0                 |
| 79      | 34            | "gabrielcsapo/node-dashboard"                   | "🌦"   |                                                | 0                 |
| 43      | 15            | "gabrielcsapo/quantified_self"                  | "⛅️"   |                                                | 4                 |
