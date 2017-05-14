import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AlertComponent } from './alert/alert.component';

@NgModule({
    imports: [ FormsModule ],
    exports: [ FormsModule,
               AlertComponent 
            ],
    declarations: [ AlertComponent ],
    providers: []
})

export class SharedModule { }