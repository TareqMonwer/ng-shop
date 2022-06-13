import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'ecom-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.user = this.accountService.getUser()
  }

  logout() {
    this.accountService.logout();
    window.location.href = "/login";
  }

}
