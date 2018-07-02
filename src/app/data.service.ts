import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
    //     var date=new Date();
    // var timer=date.getTime().toString();
    // $.get("/getAllTypes?t="+timer , null,function(data){}
    // constructor(private http: HttpClient) { }
    constructor(private http: Http) { }
    date = new Date();
    timer = this.date.getTime().toString();
    // getData(): Observable<any> {
    //     console.log(this.http.get('assets/data.txt');
    //     return this.http.get('assets/data.txt')
    //     .pipe(
    //         map(res => res)
    //     );
    // }
    getData() {
        // const reader = new FileReader();
        // reader.readAsText();
// this.http.get('assets/data.txt')
        // reader.onload = function () {
        //     console.log(this.result);
        // };
        return this.http.get('assets/data.txt')
            .pipe(
                map(res => res)
            );
    }
}
