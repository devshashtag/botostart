# info

botostart.ir template

# global todo

- [ ] convert px into rem values if possible

# home-page todo

- [ ] fix home page bugs
- [ ] remove %input-icon %form-box align it with flex
- [ ] screen-loader
- [ ] scroll-to-top

# courses-page todos

- [ ] courses description

# npm scripts

## http server

\*runs a **http server** on port **8000\***

**command**:

```bash
npm run server
```

**output**:

```console
> reactapp@1.0.0 server
> python scripts/http-server.py

Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

## sass compiler

_Auto-Compiles your **sass** files every time it changes_ _`assets/scss/styles.scss` to `assets/css/styles.css`_

**command**:

```bash
npm run sass
```

**output**:

```console
>  reactapp@1.0.0 sass
>  sass --watch assets/scss/styles.scss assets/css/styles.css

Sass is watching for changes. Press Ctrl-C to stop.
```
