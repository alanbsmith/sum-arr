# Sum Arr

_an example library built with TypeScript_

## Up & Running

```sh
npm install
```

## Local Development

To use this library locally, you'll first need to link the module:

```sh
npm link
```

Then tell TypeScript to watch for changes and rebuild

```sh
npm run build:watch
```

In your project directory, link this library:

```sh
npm link sum-arr
```

And import it into your code:

```js
const { sumArr } = require('sum-arr');

const arr = [1, 2, 3, 4, 5];
return sumArr(arr);
```

Remember to clean up when you're done:

```sh
npm unlink sum-arr
```

## Running Linters & Tests

### Linters

```sh
npm run lint
```

### Tests

```sh
npm test
```

### Test Coverage

```sh
npm run test:coverage:report
```

## License

[MIT](LICENSE)
