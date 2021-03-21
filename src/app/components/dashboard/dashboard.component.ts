import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public ngAuthService: NgAuthService
  ) { }

  ngOnInit(): void {
  }

}