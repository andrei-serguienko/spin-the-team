import { Route } from '@angular/router';
import {CalendarComponent} from "../../../../libs/history-calendar/src/lib/calendar/calendar.component";
import {HomeTestComponent} from "@spin-the-team/libs/participant-list";

export const appRoutes: Route[] = [
  { path: 'history-calendar', component: CalendarComponent },
  {
    path:'participant-list',
    component: HomeTestComponent
  }
];
