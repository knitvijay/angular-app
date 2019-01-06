import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeadComponent } from './layout/head.component';
import { LeftPanelComponent } from './layout/left-panel.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './helpers/canActivateAuthGuard';
import { Helpers } from './helpers/helpers';
import { MessageService } from './helpers/message';
import { TokenService } from './services/token.service';
import { BaseService } from './services/base.service';
import { UserService } from './services/user.service';
import { AppConfig } from './config/config';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LeftPanelComponent,
    LoginComponent,
    UsersComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,

    MatButtonModule,

    MatCheckboxModule,

    MatInputModule,

    MatFormFieldModule,

    MatSidenavModule,

    AppRoutingModule,

    HttpClientModule
  ],
  providers: [AuthGuard, Helpers, TokenService, BaseService, UserService, AppConfig, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
