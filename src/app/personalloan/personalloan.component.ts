import { Component, OnInit } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent implements OnInit {

  backimg: string = "/assets/image/b1.png";
  val: number;
  val1: string = "";
  constructor() { }

  ngOnInit() {
  }

  getEMI(amt, time, rate) {
    let rr = (1+rate);
    rate = rate/12;
    rate = rate/100;
    let rr1: number = Math.pow(1+(rate), time);
    // for(let i=1; i<=period; i++){
    //   rr = rr * rr;
    // }
    this.val = (amt*rate*rr1)/(rr1-1);
    this.val = Math.round(this.val);
    this.val1 = this.val.toString();
    console.log(this.val1);
  }
  displayEMI(){
    return this.val1;
  }

}
