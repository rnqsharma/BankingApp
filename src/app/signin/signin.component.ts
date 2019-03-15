import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Bank } from 'bank';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  passw: string="";
  empArr: Bank = {id: "", name: "", acc: 0, pass: ""};
  id: string;
  name: string;
  acc: number;
  pass: string;
  pass1: string;
  id1: string;
  res: boolean;

  constructor(private restService: RestService, private sec: SecurityService, private route: Router) { }

  ngOnInit() {
  }

  imageurl: string = "/assets/image/b12.jpg";
  
  getItem(id: string){
    // this.passw = pass;
    // console.log(pass + " " + id);

    this.restService.getEmp(id)
    .subscribe(
      (response:any)=>this.empArr=response
    )
      
    // for(let i=0; i<this.empArr.length; i++){
    //   console.log(this.empArr[i]);
    // }
      // this.getDet();
      // console.log(this.empArr.name);
  }

  getDet(pass1){
    // console.log(id);
    // this.id = id;
    // this.id1 = id1;
    // this.name = name;
    // this.acc = acc;
    // this.pass = pass;
    // this.pass1 = pass1;
    // console.log(this.id);
    // console.log(this.name);
    // console.log(this.acc);
    // console.log(this.pass);
    // console.log(this.pass1);
    if(this.empArr.pass === pass1){
      // this.res = true;
      // alert(this.empArr.name);
      
      this.res = true;
      this.sec.setUserLoggedIn();
    }
    // }else{this.res = false;}
    // console.log(this.res);
    // return this.res;
  }
  getRes(){
    // return this.res;
    if(this.res == true){
      this.getPage();
    }
  }

  getPage(){
    this.route.navigate(['home']);
  }
  
}

