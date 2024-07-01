import { Routes } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { ResolutionFormComponent } from './components/resolution-form/resolution-form.component';

export const routes: Routes = [
    //home page
    {path:"", component: TicketsComponent},
    {path:"form", component: TicketFormComponent},
    {path:"resolveForm/:id", component: ResolutionFormComponent}
];
