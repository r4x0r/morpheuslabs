import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkspaceService } from './services/workspace.service'
import { KeycloakService } from './shared/keycloak/keycloak.service';
import { KeycloakHttp, KEYCLOAK_HTTP_PROVIDER } from './shared/keycloak/keycloak.http';

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
    RouterModule.forRoot(routes)
  ],
  providers: [
    WorkspaceService,
    KeycloakService,
    KEYCLOAK_HTTP_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
