import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  error: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern(/^[A-Z][a-z]{1,}(@|$|#)[0-9]{6,}$/),
    ]),
  });

  submitRegister(forminfo: FormGroup) {
    this._AuthService.register(forminfo.value).subscribe(
      (response) => {
        if (response.status_code == 200) {
          this._Router.navigate(['/login']);
          console.log(response);
        }
      },
      (error) => {
        this.error = 'email is already register';
        console.log(error);
      }
    );
  }
}
