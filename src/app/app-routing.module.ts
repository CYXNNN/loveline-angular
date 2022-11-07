import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarAddComponent} from './components/calendar-add/calendar-add.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {EventAddComponent} from './components/event-add/event-add.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {TimelineComponent} from './components/timeline/timeline.component';
import {AuthGuardService} from './service/auth.guard';

const routes: Routes = [

  {path: 'login', component: LoginComponent},

  {path: 'event/add', component: EventAddComponent, canActivate: [AuthGuardService]},
  {path: 'timeline', component: TimelineComponent, canActivate: [AuthGuardService]},
  {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuardService]},
  {path: 'calendar/add', component: CalendarAddComponent, canActivate: [AuthGuardService]},

  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
