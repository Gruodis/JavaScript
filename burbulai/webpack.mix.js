const mix = require('laravel-mix');
/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
 */
mix.js('dev/js/apskritimas_refactor_v1.js', 'public/js')
    .sass('dev/css/apskritimas_default.scss', 'public/css').options({
        processCssUrls: false
    });

    // asset('dev/css/images', 'public/images');
