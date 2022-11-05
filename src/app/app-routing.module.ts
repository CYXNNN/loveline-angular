import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import {EventAddComponent} from './components/event-add/event-add.component';
import {HomeComponent} from './components/home/home.component';
import {TimelineComponent} from './components/timeline/timeline.component';

const routes: Routes = [
  {path: 'event/add', component: EventAddComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'calendar', component: CalendarComponent},

  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
