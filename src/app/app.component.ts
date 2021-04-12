import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  hide: Boolean = true;
  nameInvalid: Boolean = false;
  emailInvalid: Boolean = false;
  optionInvalid: Boolean = false;
  passwordInvalid: Boolean = false;

  year:any = new Date().getFullYear();


  person: any = {
    name: '',
    email: '',
    option: '',
    password: ''
  }


  validateForm(): void {

    // name
    if (!this.person.name) {
      this.nameInvalid = true;
    } else {
      this.nameInvalid = false;
    }

    // email
    if (/\S+@\S+\.\S+/.test(this.person.email)) {
      this.emailInvalid = false;
    } else {
      this.emailInvalid = true;
    }

    // option
    if (!this.person.option) {
      this.optionInvalid = true;
    } else {
      this.optionInvalid = false;
    }

    // password
    if (this.person.password.length >= 6) {
      this.passwordInvalid = false;
    } else {
      this.passwordInvalid = true;
    }

  }

}
