# Usage

```javascript
import globSass from 'esbuild-sass-glob';

esbuild.build({
    ...,
    plugins: [
        sassPlugin({
            precompile: (source, pathname) => {
                return globSass(source, pathname);
            },
        }),
    ],
    ...
})
```
