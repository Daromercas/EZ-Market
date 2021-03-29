import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public ngAuthService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
