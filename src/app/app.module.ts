import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { environment } from '../environments/environment';
//pages
import { AccountsComponent } from './pages/accounts/accounts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestortComponent } from './pages/investort/investort.component';
import { LearnComponent } from './pages/learn/learn.component';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';





@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    SettingsComponent,
    HomeComponent,
    InvestortComponent,
    LearnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    RouterModule,
    AngularFirestoreModule,
  

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
