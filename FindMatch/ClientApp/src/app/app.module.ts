import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from '../services/home.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
    ])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
