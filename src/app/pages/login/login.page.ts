import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '../../providers/alert/alert.controller';
import { AuthSerivce } from '../../providers/auth-service/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formData: any = {};

  isSubmitted: boolean;

  constructor(
    private alertCtrl: AlertController,
    private auth: AuthSerivce,
  ) {
    this.isSubmitted = false;
  }

  submitLogin(e: Event, form: NgForm) {
    console.debug('Submit login :', e);
    console.debug('Submit form :', form);

    this.isSubmitted = true;
    this.alertCtrl.confirm('YuriNET', 'hello');

    this.auth.login(this.formData.username, this.formData.password).subscribe((response) => {
      console.debug('Logged in response :', response);
    });
  }

}
