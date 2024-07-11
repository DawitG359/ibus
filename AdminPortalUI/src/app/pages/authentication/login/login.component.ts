import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login/login.model';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { MessageService } from 'src/app/services/message.service';
import { KeyService } from 'src/app/services/key.service';
import { BroadcastService } from 'src/app/services/broadcast.service';
import { lastValueFrom } from 'rxjs';
import { BroadcastMessage } from 'src/app/model/broadcast-message';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  model!: Login;

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private storageService: StorageService,
    private toastService: ToastService,
    private messageService: MessageService,
    private keyService: KeyService,
    private broadcastService: BroadcastService
  ) {}

  formSubmit(f: NgForm) {
    this.router.navigate(['/']);
  }

  login(login: Login) {
    return lastValueFrom(this.loginService.login(login));
  }

  save() {
    this.model = this.form.value as Login;

    if (
      this.model.username.trim() === '' &&
      this.model.password.trim() === ''
    ) {
      console.error('Username and password are required.');
      // Display an error message to the user, or handle it as needed.
      this.toastService.error('Email and password are required.');
      return;
    }
    if (this.model.username.trim() === '') {
      this.toastService.error('Email required.');
      return;
    }

    if (this.model.password.trim() === '') {
      this.toastService.error(' password  required.');
      return;
    }

    this.login(this.model)
      .then((result) => {
        if (result.id) {
          this.storageService.setData(
            this.keyService.TOKEN_KEY,
            result.authorization.token
          );
          this.storageService.setData(
            this.keyService.EMAIL_KEY,
            result.username
          );
          this.storageService.setData(this.keyService.USER_TYPE, result.admin);
          this.storageService.setData(
            this.keyService.USER_NAME_KEY,
            result.name
          );
          this.storageService.setData(
            this.keyService.AVATAR_KEY,
            result.avatar
          );
          this.storageService.setData(
            this.keyService.CLAIMS_KEY_ROW,
            result.permissions
          );
          this.broadcastService.broadcastTask(
            new BroadcastMessage('isLoggedIn', true)
          );

          let claims = result.permissions.reduce((acc, currentValue) => {
            acc[currentValue] = true;
            return acc;
          }, {});
          this.storageService.setData(this.keyService.CLAIMS_KEY, claims);
          this.router.navigate(['dashboard']);
          this.toastService.success(this.messageService.LoginSuccess);
        }
        // additional success handling if needed
      })
      .catch((reject) => {
        console.error('Unsuccessful login:', reject);
        // additional error handling if needed
        this.toastService.error(this.messageService.LoginError);
      })
      .finally(() => {
        // any cleanup or finalization code
      });
  }
}
