import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

/*
 * Dependencies
 */
var $: JQueryStatic,
    moment: any;

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

platformBrowserDynamic().bootstrapModule(AppModule);
