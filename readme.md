# webpack-linting-template

> a code quality testing/contribution control template

## Build Setup

``` bash
### install dependencies
npm install

### serves with hot reload at localhost:8080
npm start

### build for production with (html/scss/js) minification along with cache busting
npm run build

### run linting on all code and styles
npm run lint

### auto fixes all styles issues only
npm run fix:style

### auto fixes all code issues only (with exception of the js errors that need to be fixed manually)
npm run fix:code

### auto fixes/cleans up styling & code issues that was found during linting. Some js issues/errors cannot be automatically fixed. See https://eslint.org/docs/rules/ for more detail.
npm run fix:all
```