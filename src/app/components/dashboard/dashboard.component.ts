import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  styles: [`
  :host {
    display: flexbox;
    padding: 5px;
    border: 1px solid black;
    border-radius: 8px;
  }
  `]
})
export class DashboardComponent implements OnInit {

  users: any[] = [];
  
  constructor(
    protected userService: UserService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}