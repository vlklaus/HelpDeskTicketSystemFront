import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteModel, TicketModel } from '../../models/tickets';
import { TicketsComponent } from '../tickets/tickets.component';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
  selector: 'tr[app-single-ticket]',
  standalone: true,
  imports: [TicketsComponent, FavoritesComponent],
  templateUrl: './single-ticket.component.html',
  styleUrl: './single-ticket.component.css',
})
export class SingleTicketComponent {
  @Input() displayTicket: TicketModel = {} as TicketModel;
  @Output() delete = new EventEmitter<TicketModel>();
  @Output() bookmark = new EventEmitter<TicketModel>();

  favTicket: FavoriteModel = {} as FavoriteModel;

  //delete ticket
  emitDelete() {
    this.delete.emit(this.displayTicket);
  }  

  //bookmark ticket
  emitBookmark() {
    this.bookmark.emit(this.displayTicket);
    
  }


}

