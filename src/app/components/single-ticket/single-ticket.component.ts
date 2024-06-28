import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteModel, TicketModel } from '../../models/tickets';
import { TicketsComponent } from '../tickets/tickets.component';

@Component({
  selector: 'tr[app-single-ticket]',
  standalone: true,
  imports: [TicketsComponent],
  templateUrl: './single-ticket.component.html',
  styleUrl: './single-ticket.component.css',
})
export class SingleTicketComponent {
  @Input() displayTicket: TicketModel = {} as TicketModel;
  @Output() delete = new EventEmitter<TicketModel>();
  @Output() bookmark = new EventEmitter<TicketModel>();

  favTicket: FavoriteModel = {} as FavoriteModel;

  emitDelete() {
    if (this.favTicket)
    this.delete.emit(this.displayTicket);
  }  

  emitBookmark() {
    this.bookmark.emit(this.displayTicket);
  }
}

