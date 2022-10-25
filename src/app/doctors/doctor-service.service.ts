// import { Injectable } from '@angular/core';
// import {  Http } from '@angular/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';


// import 'rxjs/add/operator/map';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Basic my-auth-token'})
// };

// @Injectable()


// export class DoctorsDataService {
//   constructor(private http: Http) {
//     console.log("Task service initialized...");

//   }

//   getResults() {
//     return this.http.get('http://localhost:8080/physiodocs/patient/KEYSTROKES')
//    .map(res => res.json(),httpOptions);
//   }
//   ngOnInit() {
//     console.warn(this.http.get('http://localhost:8080/physiodocs/patient/KEYSTROKES')
//     .map(res => res.json(),httpOptions));
//       }
// }
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/physiodocs/patient/';


const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'my-auth-token' })
};

@Injectable({
  providedIn: 'root'
})

export class DoctorsDataService {
  constructor(private http: HttpClient) { }
  
patient (patientId: number): Observable<any> {
    return this.http.post(AUTH_API + "keystroke", {
     patientId
        }, httpOptions);
  }
}