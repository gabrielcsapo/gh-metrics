# Unreleased

- add the option to query another instance of github rather than just `github.com`

# 0.5.0 (07/16/2017)

- moved name to `gh-metrics`!

# 0.4.4 (07/07/2017)

- moves from octonode to node-github (more support)
- adds topic option
- fixes a bug where if the `name` key was included, some APIs couldn't be called
- adds deprecated option
- adds page option (for values that overflow 100)

# 0.4.3 (07/06/2017)

- fixes bug with reduce not having a default value
- removes errors from callback which will create issues while generating a table or output, instead just ommit the values that were not retrieved
- adds debug logger usage `DEBUG=github-metrics`

# 0.4.2 (07/06/2017)

- adds the option to set the limit of how many repos are being calculated in the metrics

# 0.4.1 (05/26/2017)

- fixes readme in npm

# 0.4.0 (05/26/2017)

- fixes bug when not passing in keys encounters an error
- adds option to allow table, default is json
- adds tests for table and json output
