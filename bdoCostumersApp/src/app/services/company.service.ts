import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //_url = 'https://yv40hx5jfe.execute-api.us-east-2.amazonaws.com/v1/infoempresa';
  _url: string = 'https://b8aksu8890.execute-api.sa-east-1.amazonaws.com/default/bdoLambdaFunction?nit=800220154';
  //_url: string = 'https://yv40hx5jfe.execute-api.us-east-2.amazonaws.com/v1/';
  corsHeaders: HttpHeaders;

  constructor( private http:HttpClient) {
    console.log('Customers');
  }

  getCustomers(): Observable<any>{
    
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/'
    });
    
    const uri = this._url;
    //return the get data ans print in console
    return this.http.get(uri, {headers: this.corsHeaders})
      .pipe(map(data => data.json()));
           console.log(data);
      } 
}

function data(data: any) {
  throw new Error('Function not implemented.');
}
