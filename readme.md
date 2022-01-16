# one-thing

> Set the text for the [One Thing](https://sindresorhus.com/one-thing) app

<img src="screenshot.jpg" width="503">

*Requires [Node.js 12](https://nodejs.org).*

## CLI

```sh
npm install --global one-thing
```

```
$ one-thing --help

  Usage
    $ one-thing <text>

  Example
    $ one-thing 'Prepare for important meeting'
```

## API

```sh
npm install one-thing
```

```js
import oneThing from 'one-thing';

oneThing('Prepare for important meeting');
```
