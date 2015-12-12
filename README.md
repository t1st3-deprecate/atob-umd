atob-umd
==================


[![NPM version](https://img.shields.io/npm/v/atob-umd.svg)](https://www.npmjs.com/package/atob-umd)
[![Dependency Status](https://img.shields.io/david/T1st3/atob-umd.svg)](https://david-dm.org/t1st3/atob-umd)
[![Build Status](https://img.shields.io/travis/T1st3/atob-umd.svg)](https://travis-ci.org/T1st3/atob-umd)
[![Coverage Status](https://img.shields.io/coveralls/T1st3/atob-umd.svg)](https://coveralls.io/r/T1st3/atob-umd)
[![Code Climate](https://img.shields.io/codeclimate/github/T1st3/atob-umd.svg)](https://codeclimate.com/github/T1st3/atob-umd)



About
---

`atob-umd` is a Javascript UMD module for atob().




Installation for production
---

**with Node.js**

`atob-umd` is available on [NPM](https://www.npmjs.com/package/atob-umd)

You can install it with the following command:

    npm install atob-umd


**Browser globals and AMD**


`atob-umd` is available on [Bower](http://bower.io/search/?q=atob-umd)

To install it from Bower, just run 

    bower install atob-umd



Installation for development
---


You also can download the whole project (and build it from its source; see below).

Either use `git clone` command to get it:

    git clone https://github.com/T1st3/atob-umd.git

Or download the latest version of [the whole project](https://github.com/T1st3/atob-umd/archive/master.zip).

Then, get the dependencies of the project from both Bower and NPM:

    npm install
    bower install



Build from source
---


First, see "Installation for development" above. 
Do not forget to get the dependencies!

Then, you also need to install [Gulp](http://gulpjs.com/) globally to build the project.

    npm install -g gulp

See more at the ["Getting started with Gulp" page](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started).

Once you got the dependencies and installed Gulp globally, to get info about the package from the command line, just run:

    gulp info

---

You are now ready to build!

The source is located in the "src" folder; the built target is located in the "dist" folder.

To build, just run:

    gulp build


---

**Tests**

To test, you can use either the `npm test` command or the `gulp test` command:

    npm test

or

    gulp test


---

**Serve and livereload**

You can also use the `serve` task to load the `tests/` html pages in your browser.

    gulp serve

Once it has loaded the page in the browser, this task watches for any modification in the source.
If changes happen in the source, the task automatically reloads the page in the browser (livereload).





License
---

This piece of code is triple-licensed: [MIT / BSD / GPL licenses](https://github.com/T1st3/atob-umd/blob/master/LICENSE)




Initial author
---

[T1st3](https://github.com/T1st3/)

