# Usage

Designed for usage with [esbuild-sass-plugin](https://www.npmjs.com/package/esbuild-sass-plugin). Supports both SASS and SCSS wildcard imports.

## Getting Started

```bash
npm i esbuild-sass-glob
```

Import the module and use it inside of your esbuild-sass-plugin precompile function option.

```javascript
import sassGlob from 'esbuild-sass-glob';

esbuild.build({
    ...,
    plugins: [
        sassPlugin({
            precompile: (source, pathname) => {
                return sassGlob(source, pathname);
            },
        }),
    ],
    ...
})
```

## SCSS Examples

```scss
@import './**/*.scss';
@import './*.scss';
```

Inspired by [webpack-import-glob-loader](https://www.npmjs.com/package/webpack-import-glob-loader).
