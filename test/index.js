"use strict"

const test = require('tape');
const Metrics = require('../index');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

test('gh-metrics', (t) => {
    t.plan(3);

    t.test('should throw error if there is no user specificed', (t) => {
        Metrics({
            user: 'helloworldforevergoodbye',
            token: GITHUB_TOKEN,
            keys: [],
            sort: '',
            sortAsc: false
        }, (err, result) => {
            if(err) {
                t.ok(result === undefined);
                t.pass('the function threw an errorr');
            }
        })
    });

    t.test('should be able to return a correctly structured query', (t) => {
        const keys = [
            'full_name',
            'homepage',
            'commits',
            'open_issues_count',
            'days_stagnant',
            'health',
            'languages',
            'last_contribution'
        ]
        Metrics({
            user: 'gabrielcsapo',
            token: GITHUB_TOKEN,
            keys: keys,
            sort: 'commits',
            sortAsc: true,
        }, (err, result) => {
            if(err) { t.fail(err); }
            // Check if the keys on the sub objects
            // are the same as the keys provided
            const metrics = JSON.parse(result);

            let pass = true;
            metrics.forEach((sub) => {
                if(Object.keys(sub).sort().toString() !== keys.sort().toString()) {
                    pass = false;
                }
            });
            pass ? t.pass('keys are the same') : t.fail('keys are not the same');
            t.end();
        });
    });

    t.test('should output a table', (t) => {
      const keys = [
          'full_name',
          'homepage',
          'commits',
          'open_issues_count',
          'days_stagnant',
          'health',
          'languages',
          'last_contribution'
      ]
      Metrics({
          user: 'gabrielcsapo',
          token: GITHUB_TOKEN,
          keys: keys,
          sort: 'commits',
          sortAsc: true,
          table: true
      }, (err, result) => {
          if(err) { t.fail(err); }

          try {
            JSON.parse(result);
            t.fail('should not be able to parse result');
          } catch(ex) {
            t.end();
          }
      });
    });

    t.end();
});
