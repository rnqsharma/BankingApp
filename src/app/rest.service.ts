import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import{ Response} from '@angular/http/src/static_response'
import { Bank } from 'bank';
import {Observable} from 'rxjs';
import 'rxjs/rx';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  id: string;
  name: string;
  acc: number;
  pass: string;

  url: string = "http://localhost:3000/bank/";
  flag: number;
 
  constructor(private http: Http) { }

  postUser(user: Bank){
    // this.flag =1;
    console.log("sjdfg");
    return this.http.post(this.url, user)
      .map((response:any)=> response.json())
  }

  getEmp(id: string){
    console.log("Working");
    return this.http.get(this.url+id)
      .map((response:Response)=>response.json())
  }
}
