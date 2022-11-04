import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventAddComponent} from './components/event-add/event-add.component';
import {HomeComponent} from './components/home/home.component';
import {InputErrorComponent} from './components/input-error/input-error.component';
import {InputComponent} from './components/input/input.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TimelineComponent} from './components/timeline/timeline.component';
import {AuthInterceptor} from './interceptor/auth.interceptor';
import {SecurePipe} from './pipes/secureimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventAddComponent,
    TimelineComponent,
    HomeComponent,
    NavbarComponent,
    InputErrorComponent,
    InputComponent,
    SecurePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
