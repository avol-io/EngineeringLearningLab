import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
    constructor(private router: Router) {

    }

    ngOnInit() {
    }

    private registration() {
        this.router.navigate(['utenti', 'registrazione']);
    }
}