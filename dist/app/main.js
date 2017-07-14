"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
/*
 * Dependencies
 */
var $, moment;
$ = require('jquery');
window.jQuery = $;
require('tether');
// window.Tether = tether;
window.Tether = function () {
    throw new Error('Your Bootstrap may actually need Tether.');
};
require('bootstrap');
moment = require('moment');
// configure moment
moment.locale("it");
// Enable production mode
// enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

//# sourceMappingURL=main.js.map
