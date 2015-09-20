# nomofomo
Because other people want to hang out with you.

[![Build Status](https://travis-ci.org/citelao/nomofomo.svg?branch=master)](https://travis-ci.org/citelao/nomofomo)

## Building

`gulp` compiles into `dist/`

`gulp serve` launches a server on `8080`, serving `index.html` from `public/`.

## Deploying

Remote is `git remote add azure https://eg0131@nomofomo.scm.azurewebsites.net:443/nomofomo.git`

`gulp bootstrap` and `git subtree push --prefix dist azure master`