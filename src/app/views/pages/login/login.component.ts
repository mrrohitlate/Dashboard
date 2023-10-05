import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from '../../notifications/toasters/toast-simple/toast.component';
import { filter } from 'rxjs/operators';
import { after } from 'lodash-es';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;
  placement = ToasterPlacement.TopEnd;
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(private fb: FormBuilder, private router: Router,) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('') 
    });
   }

  
  addToastr() {
    const options = {
      title: `Loged In Successfully`,
      delay: 10000,
      placement: this.placement,
      color: 'success',
      autohide: true,
    }
    const componentRef = this.toaster.addToast(AppToastComponent, { ...options });
  }

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
 
  loginUser() {
    if (this.loginForm.value.username === 'veena@epps-erp.com' && this.loginForm.value.password === 'E0002') {
      console.log('Veena logged in');
      this.addToastr();
      this.router.navigateByUrl('/Dashboard', { skipLocationChange: true });

    } else {
      console.log('Invalid credentials');
    }
  }

}
