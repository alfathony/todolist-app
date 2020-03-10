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

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

/**
 * Versioning / Cache Busting
 * https://laravel.com/docs/7.x/mix#versioning-and-cache-busting
 */

if (mix.inProduction()) {
    mix.version();
}

/**
 * Browsersync Reloading
 * https://laravel.com/docs/7.x/mix#browsersync-reloading
 */

mix.browserSync({
    proxy: 'todolist-app.test'
});

/**
 * Disabled Bundle Notification
 * https://laravel.com/docs/7.x/mix#notifications
 */

mix.disableNotifications();
