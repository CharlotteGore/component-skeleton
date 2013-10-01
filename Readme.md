# Component Skeleton

  A stub/skeleton project for developing Components. Uses Grunt to run jshint on your source file, install dependencies, build your component and then run tests (using mocha/chai).

## Installation

  Clone the repo to a useful folder, remove the existing remote repo and add your own.

```bash
$ git clone git@github.com:CharlotteGore/component-skeleton.git difference-engine-emulator
$ cd difference-engine-emulator
$ git remote rm origin
$ git remote add origin git@github.com:AdaLovelace/difference-engine-emulator.git
$ npm install
```

  If you don't have Grunt cli installed already, you should also do:

```bash
$ npm install -g grunt-cli
```

  And if you haven't got Component cli tools already installed you should do:

```bash
$ npm install -g component
```
  And you're going to need node and npm installed to do any of this. Obviously.

## Basic configuration of the component.json

  The component.json in the repo is just a stup. As a minimum, replace

```javascript
"name": "component-skeleton",
"repo": "charlottegore/component-skeleton",
"description": "Replace this with the description of the module",
 ```
   with

```javascript
"name": "difference-engine-emulator",
"repo": "adalovelace/difference-engine-emulator",
"description": "A Javascript emulation of Babbage's Difference Engine. He never finished it, lazy bugger.",
```

  In this example, after pushing up to github, everyone can do...

```bash
$ component install adalovelace/difference-engine-emulator
```

  .. and then invoke your module with

```javascript
	var engine = require('difference-engine-emulator')
```

## Grunt commands

### Test

  Runs the tests. In this case, it uses mocha-phantomjs with chai to open the testrunner.html, which loads test.js.

  All set up, ready to go... just add tests.

  This actually works on Windows, too.

 ```bash
$ grunt test
```

### Install

  Installs Component dependencies

```bash
$ grunt install
```
### Build

  Builds the Component to build/build.js

```bash
$ grunt build
```

### Jshint

  Runs JSHint against index.js

 ```bash
$ grunt jshint
```

### Watch

  Watches index.js and when it detects changes it runs jshint, then install, then build then test automatically.

 ```bash
$ grunt watch
```


## License

  MIT
