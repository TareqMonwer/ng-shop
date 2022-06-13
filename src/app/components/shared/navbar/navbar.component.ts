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
    this.getCurrentUser();
  }

  logout() {
    this.accountService.logout();
    // TODO: Handle route redirection
    // window.location.href = "/login";
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: user => this.user = user,
      error: error => console.log(error)
    })
  }

}
