import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgProgressModule} from 'ngx-progressbar';
import {NgProgressHttpModule} from 'ngx-progressbar/http';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {EventAddComponent} from './components/event-add/event-add.component';
import {HomeComponent} from './components/home/home.component';
import {InputErrorComponent} from './components/input-error/input-error.component';
import {InputComponent} from './components/input/input.component';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TimelineComponent} from './components/timeline/timeline.component';
import {AuthInterceptor} from './interceptor/auth.interceptor';
import {SecurePipe} from './pipes/secureimage.pipe';
import { CalendarAddComponent } from './components/calendar-add/calendar-add.component';
import { EventContentComponent } from './components/event-content/event-content.component';

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
    CalendarComponent,
    LoginComponent,
    CalendarAddComponent,
    EventContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    NgProgressModule.withConfig({
      trickleSpeed: 200,
      debounceTime: 10,
      color: '#8f0303',
      spinner: false,
    }),
    NgProgressHttpModule,
    FontAwesomeModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
