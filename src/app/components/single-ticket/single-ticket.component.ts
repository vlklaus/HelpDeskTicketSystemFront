import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteModel, TicketModel } from '../../models/tickets';
import { TicketsComponent } from '../tickets/tickets.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'tr[app-single-ticket]',
  standalone: true,
  imports: [TicketsComponent, FavoritesComponent, RouterLink],
  templateUrl: './single-ticket.component.html',
  styleUrl: './single-ticket.component.css',
})
export class SingleTicketComponent {
  constructor (private _favService: FavoritesService) {}

  @Input() displayTicket: TicketModel = {} as TicketModel;
  @Input() favoriteTickets: FavoriteModel [] = [];
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

  IsFavorite(): boolean {
    if (this.favoriteTickets.some(x => x.ticketId == this.displayTicket.id)) {
      return true;
    } else {return false}
  }
  GetFavs() {
    this._favService.getAll().subscribe((response: FavoriteModel[]) => {
      // console.log(response);
      this.favoriteTickets = response;
    });
  }
    
  DeleteFav(t: TicketModel) { 
    this._favService.removeFavorite(t.id).subscribe((response) => {
      this.GetFavs();
    });
  }


}

