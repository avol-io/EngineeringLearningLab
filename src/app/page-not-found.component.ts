import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-not-found',
    template: `
        <div class='container'>
            <h2>Pagina non trovata!</h2>
            <h3>I'm sorry :P</h3>
        </div>`
})

export class PageNotFoundComponent {
    constructor() {
    }


}