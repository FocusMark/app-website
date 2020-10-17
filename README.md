The FocusMark App Web Landing repository contains all of the code used to deploy the home page, or landing page, for the FocusMark website.

The repository consists of NodeJS scripts, Spectre CSS and HTML. 

# Requirements

- [gulp.js CLI](https://gulpjs.com/docs/en/getting-started/quick-start/)
- [Node.js](https://nodejs.org/en/)

# Deployment

In order to deploy the landing page website you will need to install the NPM dependencies and then run the _gulpjs_ script.

```
$ npm install global gulp-cli
$ npm install
$ gulp default
```

This will minify and publish the website into a `/dist` directory in the root of the repository. 

> You can also use the `gulp watch` task to observe changes to the source files and re-publish to the `/dist` directory.