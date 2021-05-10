import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    public ngAuthService: AuthenticationService
  ) { }
  ngOnInit(): void {
  }

}
