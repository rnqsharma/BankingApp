import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  backimg: string = "/assets/image/aboutus1.jpg";
  constructor() { }

  ngOnInit() {
  }

}
