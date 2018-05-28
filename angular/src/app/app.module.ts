import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth-interceptor';
import { AppComponent } from './app.component';

// import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   {
//     path: 'main',
//     component: 'MainComponent'
//   },
//   {
//     path: 'app',
//     component: 'AppComponeny'
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    BrowserModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
