import { Component, Input } from '@angular/core';
import { TicketModel } from '../../models/tickets';

@Component({
  selector: 'tr[app-single-ticket]',
  standalone: true,
  imports: [],
  templateUrl: './single-ticket.component.html',
  styleUrl: './single-ticket.component.css',
})
export class SingleTicketComponent {
Deletefav() {
throw new Error('Method not implemented.');
}
AddFav() {
throw new Error('Method not implemented.');
}
  @Input() displayTicket: TicketModel = {} as TicketModel;
}

