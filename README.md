# default-args
<!-- badge -->
[![Version](https://img.shields.io/npm/v/default-args.svg?style=flat-square)](https://www.npmjs.com/package/default-args)
[![CodeFactor](https://www.codefactor.io/repository/github/victornpb/default-args/badge?style=flat-square)](https://www.codefactor.io/repository/github/victornpb/default-args)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/victornpb/tiny-dedent?style=flat-square)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/default-args?style=flat-square)](https://www.npmjs.com/package/default-args)

[![Downloads](https://img.shields.io/npm/dt/default-args.svg?style=flat-square)](https://www.npmjs.com/package/default-args)
[![Node](https://img.shields.io/node/v/default-args.svg?style=flat-square)](package.json)
[![LICENSE](https://img.shields.io/github/license/victornpb/default-args?style=flat-square)](LICENSE)
<!-- endbadge -->

![carbon-3](https://user-images.githubusercontent.com/3372598/175796626-18513d8d-06ad-4cbc-a17d-5f67f7248e5a.png)

A simple function for providing defaults to an options to argument. No dependencies, tiny amount of code.

default-args makes input validation simpler, by always ensuring you will have well defined object shape you can work with.

It also prevents the inclusion of extraneous properties by only copying properties that are defined in the default options object. This ensures that the final object only contains the properties that are specified. This not only prevents unexpected behavior but also potential security vulnerabilities caused by the inclusion of extraneous properties.

By using this package you also eliminate a class of vulnerability called [object prototype pollution](https://learn.snyk.io/lessons/prototype-pollution/javascript/) by correctly handling options.


## Usage

```js
import defaults from 'default-args';

function helloWorld(options) {
    options = defaults({
        foo: true,
        bar: {
            a: 1,
            b: 2,
        },
    }, options);

    // do something with options
}
```
## Installation

### [NPM](https://npmjs.com/package/default-args)

    npm install default-args
### [Yarn](https://github.com/yarnpkg/yarn)

    yarn add default-args

### CDN

    <script type="text/javascript" src="https://unpkg.com/default-args/"></script>

## Packages

<!-- Output table (auto generated do not modify) -->

| File                      | Module Type | Transpiled | Source Maps |
|---------------------------|-------------|------------|-------------|
| dist/default-args.esm.mjs | esm         | No         | No          |
| dist/default-args.cjs.js  | cjs         | Yes        | Yes         |
| dist/default-args.esm.js  | esm         | Yes        | Yes         |
| dist/default-args.js      | umd         | Yes        | Yes         |

<!-- END -->



## License

The code is available under the [MIT](LICENSE) license.

## Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.
