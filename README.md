# Svelvet


[![build status](https://github.com/jakedeichert/svelvet/workflows/CI/badge.svg?branch=master)][github_ci]


A cli `svelte` compiler & watcher that works with [snowpack][snowpack].



## Goals

* No bundler required
* _Literally_ no config required
* Integrate directly with snowpack for an optimal experience
* Instant dev watch cycle
* Near-instant optimized production builds
* Only support standard esm imports (no css/image/custom-loader-like imports)
* Keep your `node_modules` super light



## Getting started

Create a new project and add the required dependencies. An example project is set up [here][basic_example].

~~~sh
# svelte is a peer dep required by svelvet. You get to choose which
# version to use and when to upgrade!
npm install svelte

# Install the svelvet cli
npm install svelvet --save-dev
~~~

Add a few simple scripts as seen [here][basic_example_package]:

~~~json
"scripts": {
    "dev": "npm run clean && svelvet",
    "build": "NODE_ENV=production npm run dev",
    "clean": "rm -rf dist && mkdir dist && cp -R public/* dist",
    "serve": "serve --listen 8080 --single dist"
},
~~~

And finally, add some `svelte` files! All source files must be stored inside the `src` directory so `svelvet` can compile them into the `dist` directory.

You also must have an [`index.html`][basic_example_html] file that loads your entrypoint or root `svelte` component.

~~~html
<!-- Example: dist/index.html -->
<!DOCTYPE html>
<html lang="en">
    <body>
        <div id="app"></div>

        <script type="module">
            import App from './App.js';

            new App({
                target: document.querySelector('#app'),
            });
        </script>
    </body>
</html>
~~~






## Possible future features

* Simple `dist` serving in dev mode
* Auto refresh page after compile/transform



## Current issues

* Need to add `/index` to your imports manually for now




[github_ci]: https://github.com/jakedeichert/svelvet/actions?query=workflow%3ACI
[snowpack]: https://github.com/pikapkg/snowpack
[basic_example]: https://github.com/jakedeichert/svelvet/tree/master/examples/basic
[basic_example_package]: https://github.com/jakedeichert/svelvet/blob/master/examples/basic/package.json
[basic_example_html]: https://github.com/jakedeichert/svelvet/blob/master/examples/basic/public/index.html
