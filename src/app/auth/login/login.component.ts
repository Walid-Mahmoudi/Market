import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern(/^[A-Z][a-z]{1,}(@|$|#)[0-9]{6,}$/),
    ]),
  });

  submitLogin(forminfo: FormGroup) {
    this._AuthService.login(forminfo.value).subscribe(
      (response) => {
        if (response.status_code == 200) {
          localStorage.setItem('userToken', response.data.token);
          this._AuthService.setUserData();
          this._Router.navigate(['/product']);
          console.log(response);
        }
      },
      (error) => {
        this.error = 'email is not register';
        console.log(error);
      }
    );
  }
}
