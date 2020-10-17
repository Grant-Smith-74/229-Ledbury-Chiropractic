# 229 Ledbury Chiropractic

Static site built with [Eleventy](https://www.11ty.dev/) and [Laravel Mix](https://laravel-mix.com/docs/5.0/basic-example) or 229 Ledbury Chiropractic. :yum:

## Features

- [Eleventy](https://www.11ty.dev/docs/)
- [Laravel Mix](https://laravel-mix.com/docs/5.0/basic-example) (Webpack) to watch, concatenate and compile styles and scripts
- HTML minifier
- Clean CSS to inline styles
- Terser to inline Javascript

## Installation

```
npm install
```

To start the development server (and Mix), run the `npm run watch` command in terminal. Eleventy has hot reloading baked in and will automatically watch your template files for changes. Mix will watch any changes to the JS and SCSS files.

## Folder Structure

The `src` folder contains all the templates, partials and content - which Eleventy will parse into HTML for us.

Within the `src` folder, lives a `_data` folder. Here you'll find a `site.json` file - for general config stuff e.g site name, author, email, social media links etc.

Uncompiled SCSS and JS reside in the `resources` folder, Mix will be watching these folders for any changes. These are then inlined into the header and footer respectively.

## Ready to deploy?

    $ npm run production

## Front end helpers

- [Lazy Sizes](https://github.com/aFarkas/lazysizes), Lazy load images
- [Browser Update Warning](https://browser-update.org/), Inform users to update their web browser

