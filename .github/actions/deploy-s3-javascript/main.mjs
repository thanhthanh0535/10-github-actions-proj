import * as core from '@actions/core';
//import * as github from '@actions/github';
import * as exec from '@actions/exec';

function run() {
    // input values
    const bucket = core.getInput('bucket',{required: true});
    const bucketregion = core.getInput('bucket-region',{required: true});
    const distFolder = core.getInput('dist-folder',{required: true});

    //upload file
    const s3url = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3url} --region ${bucketregion} `)
    core.notice('Hello from my custom Javascript action!');
  
}

run();