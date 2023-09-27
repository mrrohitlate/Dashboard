import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  constructor() { }

  ngOnInit(): void { }

  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  onSubmit2() {
    this.browserDefaultsValidated = true;
    console.log('Submit... 2');
  }

  onReset2() {
    this.browserDefaultsValidated = false;
    console.log('Reset... 3');
  }

  onSubmit3() {
    this.tooltipValidated = true;
    console.log('Submit... 3');
  }

  onReset3() {
    this.tooltipValidated = false;
    console.log('Reset... 3');
  }

}
