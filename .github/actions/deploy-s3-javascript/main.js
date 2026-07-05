const core = require('@actions/core');
const github = require('@action/github');
const exec = require('@action/exec');

function run() {
    core.notice('Hello from my custom Javascript action!');
  
}

run();