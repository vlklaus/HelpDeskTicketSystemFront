import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicketsComponent, TicketFormComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
