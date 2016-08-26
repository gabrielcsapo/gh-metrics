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

`github-metrics --user gabrielcsapo` // this will call github using the public api

`github-metrics --user gabrielcsapo --token {token}` // this will make the call with an authenticated token

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

`github-metrics --user gabrielcsapo --keys 'full_name, homepage, commits, open_issues_count, health' --sort 'commits'`

| commits | full_name                                       | health | homepage                                       | open_issues_count |
| ------- | ----------------------------------------------- | ------ | ---------------------------------------------- | ----------------- |
| 226     | "gabrielcsapo/node-flat-db"                     | "⛅️"   |                                                | 0                 |
| 167     | "gabrielcsapo/granary-server"                   | "⛅️"   | "http://granaryjs.com"                         | 6                 |
| 121     | "gabrielcsapo/node-notebook"                    | "🌦"   | "http://gabrielcsapo.github.io/node-notebook/" | 2                 |
| 106     | "gabrielcsapo/psychic-ui"                       | "⛅️"   | "http://gabrielcsapo.github.io/psychic-ui/"    | 2                 |
| 66      | "gabrielcsapo/node-distribute"                  | "⛅️"   |                                                | 1                 |
| 65      | "gabrielcsapo/granary"                          | "⛅️"   | "http://granaryjs.com"                         | 3                 |
| 63      | "gabrielcsapo/node-dashboard"                   | "🌞"   |                                                | 0                 |
| 60      | "gabrielcsapo/node-chat-rooms"                  | "🌦"   |                                                | 2                 |
| 56      | "gabrielcsapo/gabrielcsapo.com"                 | "⛅️"   | "www.gabrielcsapo.com"                         | 1                 |
| 53      | "gabrielcsapo/saywhat"                          | "🌦"   | "http://gabrielcsapo.github.io/saywhat/"       | 0                 |
| 51      | "gabrielcsapo/grunt-screenshot"                 | "⛅️"   |                                                | 0                 |
| 30      | "gabrielcsapo/npm-what"                         | "🌦"   |                                                | 2                 |
| 25      | "gabrielcsapo/github-metrics"                   | "⛅️"   |                                                | 0                 |
| 24      | "gabrielcsapo/steno"                            | "🌩"   | "http://gabrielcsapo.github.io/steno/"         | 1                 |
| 16      | "gabrielcsapo/prompt"                           | "🌩"   |                                                | 0                 |
| 15      | "gabrielcsapo/quantified_self"                  | "⛅️"   |                                                | 3                 |
| 13      | "gabrielcsapo/compress-object"                  | "🌦"   |                                                | 1                 |
| 11      | "gabrielcsapo/dobby"                            | "🌩"   |                                                | 0                 |
| 10      | "gabrielcsapo/node-document-parser"             | "🌦"   |                                                | 0                 |
| 9       | "gabrielcsapo/tabular"                          | "🌩"   |                                                | 0                 |
| 5       | "gabrielcsapo/granary-sample"                   | "🌩"   |                                                | 0                 |
| 2       | "gabrielcsapo/mocha-markdown-extended-reporter" | "🌩"   |                                                | 0                 |
