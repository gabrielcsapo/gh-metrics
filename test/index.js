"use strict"

const test = require('tape').test;
const Metrics = require('../index');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

test('github-metrics', (t) => {
    t.plan(2);

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
            sortAsc: true
        }, (err, result) => {
            // Check if the keys on the sub objects
            // are the same as the keys provided
            let pass = true;
            result.forEach((sub) => {
                if(Object.keys(sub).sort().toString() !== keys.sort().toString()) {
                    pass = false;
                }
            });
            pass ? t.pass('keys are the same') : t.fail('keys are not the same');
            t.end();
        });
    });

    t.end();
});
