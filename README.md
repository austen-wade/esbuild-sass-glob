# Usage

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

Inspired by webpack-import-glob-loader
