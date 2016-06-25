# github-metrics
> a repo to track github stats across different users github repos

[![Npm Version](https://img.shields.io/npm/v/github-metrics.svg)](https://www.npmjs.com/package/github-metrics)
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

```
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

`github-metrics --user gabrielcsapo --keys 'full_name, homepage, commits'`

| commits | full_name                       | homepage                                        |
| ------- | ------------------------------- | ----------------------------------------------- |
| 6       | "gabrielcsapo/compress-object"  |                                                 |
| 5       | "gabrielcsapo/granary-sample"   |                                                 |
| 37      | "gabrielcsapo/grunt-screenshot" |                                                 |
| 11      | "gabrielcsapo/dobby"            |                                                 |
| 54      | "gabrielcsapo/node-chat-rooms"  |                                                 |
| 146     | "gabrielcsapo/granary-server"   | "http://granaryjs.com"                          |
| 4       | "gabrielcsapo/github-metrics"   |                                                 |
| 39      | "gabrielcsapo/node-dashboard"   |                                                 |
| 55      | "gabrielcsapo/granary"          | "http://gabrielcsapo.github.io/granary-server/" |
| 47      | "gabrielcsapo/gabrielcsapo.com" | "www.gabrielcsapo.com"                          |
| 22      | "gabrielcsapo/steno"            | "http://gabrielcsapo.github.io/steno/"          |
| 61      | "gabrielcsapo/node-distribute"  |                                                 |
| 49      | "gabrielcsapo/saywhat"          | "http://gabrielcsapo.github.io/saywhat/"        |
| 16      | "gabrielcsapo/prompt"           |                                                 |
| 102     | "gabrielcsapo/psychic-ui"       | "http://gabrielcsapo.github.io/psychic-ui/"     |
| 22      | "gabrielcsapo/npm-what"         |                                                 |
| 9       | "gabrielcsapo/tabular"          |                                                 |
| 225     | "gabrielcsapo/node-flat-db"     |                                                 |
| 103     | "gabrielcsapo/node-notebook"    | "http://gabrielcsapo.github.io/node-notebook/"  |
