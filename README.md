# Usage

Designed for usage with [esbuild-sass-plugin](https://www.npmjs.com/package/esbuild-sass-plugin)

```bash
npm i esbuild-sass-glob
```

## Add to your build script

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

## Import Example

```scss
@import './**/*.scss';
```

Inspired by webpack-import-glob-loader
