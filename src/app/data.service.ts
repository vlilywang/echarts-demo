import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
    private api_url = 'http://localhost:8088/getData';
    //     var date=new Date();
    // var timer=date.getTime().toString();
    // $.get("/getAllTypes?t="+timer , null,function(data){}
    // constructor(private http: HttpClient) { }
    constructor(private http: HttpClient) { }
    listWebservice() {
        let url;
        url = `${this.api_url}`;
        return this.http.get(url)
          .pipe(
            map(res => res)
          );
      }
    getData(): Observable<any> {
        // http://localhost:8088/getData
        // return this.http.get('http://localhost:8088/getData')
        // .pipe(
        //     map(res => res)
        // );
        let url;
        url = `${this.api_url}`;
        return this.http.get(url)
          .pipe(
            map(res => res)
          );
    }
    // getData() {
    //     return this.http.get('assets/data.txt')
    //         .pipe(
    //             map(res => res)
    //         );
    // }
}
