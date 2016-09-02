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

| commits | full_name                                       | health | homepage                                       |
| ------- | ----------------------------------------------- | ------ | ---------------------------------------------- |
| 226     | "gabrielcsapo/node-flat-db"                     | "🌦"   |                                                |
| 167     | "gabrielcsapo/granary-server"                   | "🌦"   | "http://granaryjs.com"                         |
| 121     | "gabrielcsapo/node-notebook"                    | "🌦"   | "http://www.gabrielcsapo.com/node-notebook/"   |
| 107     | "gabrielcsapo/psychic-ui"                       | "🌞"   | "http://www.gabrielcsapo.com/psychic-ui/"      |
| 72      | "gabrielcsapo/node-dashboard"                   | "🌩"   |                                                |
| 66      | "gabrielcsapo/node-distribute"                  | "⛅️"   |                                                |
| 65      | "gabrielcsapo/granary"                          | "🌦"   | "http://granaryjs.com"                         |
| 60      | "gabrielcsapo/node-chat-rooms"                  | "🌦"   |                                                |
| 56      | "gabrielcsapo/gabrielcsapo.github.io"           | "⛅️"   | "http://www.gabrielcsapo.com"                  |
| 53      | "gabrielcsapo/saywhat"                          | "🌞"   | "http://www.gabrielcsapo.com/saywhat/"         |
| 51      | "gabrielcsapo/grunt-screenshot"                 | "🌦"   |                                                |
| 30      | "gabrielcsapo/npm-what"                         | "🌦"   |                                                |
| 27      | "gabrielcsapo/github-metrics"                   | "⛅️"   |                                                |
| 24      | "gabrielcsapo/steno"                            | "🌩"   | "http://www.gabrielcsapo.com/steno/"           |
| 17      | "gabrielcsapo/quantified_self"                  | "⛅️"   |                                                |
| 17      | "gabrielcsapo/compress-object"                  | "🌞"   | "http://www.gabrielcsapo.com/compress-object/" |
| 16      | "gabrielcsapo/prompt"                           | "🌩"   |                                                |
| 11      | "gabrielcsapo/dobby"                            | "🌩"   |                                                |
| 10      | "gabrielcsapo/node-document-parser"             | "🌦"   |                                                |
| 9       | "gabrielcsapo/tabular"                          | "🌩"   |                                                |
| 7       | "gabrielcsapo/node-timecapsule"                 | "🌞"   |                                                |
| 5       | "gabrielcsapo/granary-sample"                   | "🌩"   |                                                |
| 2       | "gabrielcsapo/mocha-markdown-extended-reporter" | "🌩"   |                                                |
