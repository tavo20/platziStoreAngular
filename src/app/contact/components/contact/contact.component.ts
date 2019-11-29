import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailField: FormControl;
  constructor() { 
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  ngOnInit() {
  }
  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
