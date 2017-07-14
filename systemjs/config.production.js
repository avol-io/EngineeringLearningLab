"use strict";

module.exports = {
    defaultJSExtensions: true,
    paths: {
        'npm:': './node_modules/',
        'src:': './tmp/'
    },
    map: {
        'app': 'src:app',
        'configurations': 'src:app/configurations.js',
        // angular
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        'rxjs': 'npm:rxjs',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        // other
        'jquery': 'npm:jquery/dist/jquery.js',
        'bootstrap': 'npm:bootstrap/dist/js/bootstrap.js',
        'tether': 'npm:tether/dist/js/tether.js',
        'lodash': 'npm:lodash/lodash.js',
        'moment': 'npm:moment/min/moment-with-locales.js'
    },
    packages: {
        app: {
            main: 'main.js'
        },
        rxjs: {
            main: 'Rx.js'
        }
    }
   
};