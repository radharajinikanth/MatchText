import 'rxjs/Rx';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

export class HomeService {
    constructor(private http: Http) { }

    public findMatch(text: string, subText: string): Observable<string> {
        return this.http.get('/Home/FindMatch?text='+text+'&subText='+subText).
            map(res => { return res.text() });
    }
}
