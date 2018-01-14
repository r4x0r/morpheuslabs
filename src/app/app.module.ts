import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkspaceService } from './services/workspace.service'
import { UserService } from './services/user.service'
import { KeycloakService } from './shared/keycloak/keycloak.service';
import { KeycloakHttp, KEYCLOAK_HTTP_PROVIDER } from './shared/keycloak/keycloak.http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './util/authInterceptor';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'morpheustheme' }),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    WorkspaceService,
    KeycloakService,
    KEYCLOAK_HTTP_PROVIDER,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
