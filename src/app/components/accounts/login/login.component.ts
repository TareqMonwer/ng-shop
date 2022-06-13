import { Component, OnInit } from '@angular/core';
import { AccountCredentials } from 'src/app/models/account-credentials';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'ecom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(model: AccountCredentials) {
    this.login(model);
  }

  login(model: AccountCredentials) {
    this.accountService.login(model).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    })
  }
}
