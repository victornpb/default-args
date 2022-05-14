# defaultoptions
<!-- badge -->
[![Version](https://img.shields.io/npm/v/defaultoptions.svg?style=flat-square)](https://www.npmjs.com/package/defaultoptions)
[![CodeFactor](https://www.codefactor.io/repository/github/victornpb/defaultoptions/badge?style=flat-square)](https://www.codefactor.io/repository/github/victornpb/defaultoptions)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/victornpb/tiny-dedent?style=flat-square)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/defaultoptions?style=flat-square)](https://www.npmjs.com/package/defaultoptions)

[![Downloads](https://img.shields.io/npm/dt/defaultoptions.svg?style=flat-square)](https://www.npmjs.com/package/defaultoptions)
[![Node](https://img.shields.io/node/v/defaultoptions.svg?style=flat-square)](package.json)
[![LICENSE](https://img.shields.io/github/license/victornpb/defaultoptions?style=flat-square)](LICENSE)
<!-- endbadge -->

A simple function for providing default options to arguments. No dependencies, tiny amount of code.

## Usage

```js
import defaults from 'defaultoptions';

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

### [NPM](https://npmjs.com/package/defaultoptions)

    npm install defaultoptions
### [Yarn](https://github.com/yarnpkg/yarn)

    yarn add defaultoptions

### CDN

    <script type="text/javascript" src="https://unpkg.com/defaultoptions/"></script>

## Packages

<!-- Output table (auto generated do not modify) -->

| File                        | Module Type | Transpiled | Source Maps |
|-----------------------------|-------------|------------|-------------|
| dist/defaultoptions.esm.mjs | esm         | No         | No          |
| dist/defaultoptions.cjs.js  | cjs         | Yes        | Yes         |
| dist/defaultoptions.esm.js  | esm         | Yes        | Yes         |
| dist/defaultoptions.js      | umd         | Yes        | Yes         |

<!-- END -->



## License

The code is available under the [MIT](LICENSE) license.

## Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.
