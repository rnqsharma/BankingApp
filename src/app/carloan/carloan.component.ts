import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carloan',
  templateUrl: './carloan.component.html',
  styleUrls: ['./carloan.component.css']
})
export class CarloanComponent implements OnInit {
 
  backimg: string = "/assets/image/b1.png";
  val1: string;
  val: number;
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
