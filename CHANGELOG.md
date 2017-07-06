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
