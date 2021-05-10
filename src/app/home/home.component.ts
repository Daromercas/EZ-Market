import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public ngAuthService: AuthenticationService
  ) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.\[a-z]{2,4}$";
    passwordPattern="(.{8,})";
    

     
    email: string;
    password: string;
     
    signUp() {
    this.ngAuthService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
     
    signIn() {
      
    this.ngAuthService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    
    
    }
     
    signOut() {
    this.ngAuthService.SignOut();
    }

  ngOnInit(): void {
  }
 }


