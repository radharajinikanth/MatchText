import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    public matchTextOutPut = '';
    public form: FormGroup;    
   
    constructor(        
        private http: Http) {
        this.form = new FormGroup({
            text: new FormControl(''),
            subText: new FormControl(''),
        });
    }

    public matchText() {
        this.http.get('/Home/FindMatch?text=' + this.form.controls.text.value + '&subText=' + this.form.controls.subText.value).
        subscribe(res => { this.matchTextOutPut= res.text() });
    }
}

