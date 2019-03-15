import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';
import {Response} from '@angular/http';
import { Bank } from 'bank';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;

  user1: Bank;
  constructor(private restService: RestService) { }

  backimg: string = "/assets/image/b1.png";
  ngOnInit() {
    this.form = new FormGroup({
        email: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.email
        ])),
        n: new FormControl("", Validators.compose([
          Validators.required,
          this.textValidator
        ])),
        // ps
        accno: new FormControl("", Validators.compose([
          Validators.minLength(10),
          Validators.required,
          Validators.maxLength(10)
        ])),
        pswd: new FormControl("", Validators.compose([
          Validators.minLength(8),
          Validators.required
        ]))
      });
  }
  onSubmit(form) {
    console.log(form);
  }

  textValidator(control) {
    if (control.value.length < 4) {
      return { "n": "sjdg" }
    }
  }

  postItem(id, name, acc, pass){
    console.log("fhjgsd");
    let user1 = new Bank(id, name, acc, pass);
    console.log("fhjgsd2");
    this.restService.postUser(user1)
      .subscribe(
        (response:any)=>console.log("Added")
        ,((error)=>alert(error))
      )
  }

}
