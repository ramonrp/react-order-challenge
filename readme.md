# Webpack 5 boilerplate

![](https://habrastorage.org/webt/q-/lv/b0/q-lvb0d4li7cpi-hsctistlzooi.png)

## Features

[Webpack 5](https://webpack.js.org/) boilerplate with support of most common loaders and modules:

- Webpack 5
  - html template
  - imports images, fonts.
  - sass, [css modules](https://github.com/css-modules/css-modules) with automatic typescript declaration
  - postcss loader
  - generates source maps for development.
  - Dev and Prod config
  - Bundle analyzer
  - Suppor for enviroment variables
- [Babel](https://babeljs.io/)
  - preset-env
  - preset react
- React
  - [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) (no need to import react for using jsx)
  - with react support (also with [react-refresh](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin))
- Typescript support
- [Prettier](https://www.npmjs.com/package/prettier)
- [Webpack dev server](https://webpack.js.org/configuration/dev-server/)
- [Husky](https://www.npmjs.com/package/husky) prehooks for prettier format.

## Instalation

Click on the `Use this template` green button at the top - this will make a new github repo with clean commit history. Then clone it and install dependencies:

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
