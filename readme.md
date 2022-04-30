# one-thing

> Set the text for the [One Thing](https://sindresorhus.com/one-thing) app

<img src="screenshot.jpg" width="503">

**Requires [Node.js 12](https://nodejs.org) and the [One Thing](https://sindresorhus.com/one-thing) app to be installed.**

## CLI

```sh
npm install --global one-thing
```

```
$ one-thing --help

  Usage
    $ one-thing <text>
    $ one-thing --get

  Example
    $ one-thing 'Prepare for important meeting'
```

## API

```sh
npm install one-thing
```

```js
import oneThing, {getOneThing} from 'one-thing';

await oneThing('Prepare for important meeting');

console.log(await getOneThing());
//=> 'Prepare for important meeting'
```
