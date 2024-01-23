import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService) {}
  ngOnInit(): void {
    this._AuthService.userdata.subscribe(() => {
      if (this._AuthService.userdata.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  callLogout() {
    this._AuthService.logOut();
  }
}
