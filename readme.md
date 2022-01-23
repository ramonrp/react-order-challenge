# Order Challenge React

## Description

This app is a Challenge from React module of master frontend of lemoncode.Description:

- Get an Order and show id, date, prices, and products of each order.
- Be able to change price of each product and update total price.
- Multicheckbox to validate / invalidate different products.
- Be able to send order only in case all products validation is done.

## Solution

I solved this challenge with two different approaches:

1. Props and local state.
2. Context and useReducer.

It's possible to find both solutions in different branches of the proyect.

## Instalation

Clone repository and and install dependencies:

```sh
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build:prod
```

Production files goes to /dist folder

### Production dev

```bash
npm run build:dev
```

Production files goes to /dist folder

### Bundler Analyzer

```bash
npm run build:perf
```

helps to inspect the bundle

## Author

- [Ramon Ruiz](https://github.com/ramonrp)

## License

This project is open source and available under the [MIT License](LICENSE).
