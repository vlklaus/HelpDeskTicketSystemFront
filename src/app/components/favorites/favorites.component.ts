import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { FavoritesService } from '../../services/favorites.service';
import { FavoriteModel, TicketModel } from '../../models/tickets';
import { TicketsComponent } from '../tickets/tickets.component';
import { SocialUser } from '@abacritt/angularx-social-login';
import { SingleTicketComponent } from '../single-ticket/single-ticket.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [TicketsComponent, SingleTicketComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  constructor(
    private _ticketService: TicketsService,
    private _favService: FavoritesService
  ) {}

  allFavs: FavoriteModel[] = [];
  user: SocialUser = {} as SocialUser;
  displayFav: boolean = false;
  @Input() favoriteTickets: FavoriteModel [] = [];
  @Output() delete = new EventEmitter<FavoriteModel>();

  toggleDisplay() {
    this.displayFav = !this.displayFav;
  }




  DeleteFav(f: FavoriteModel) { 
    this._favService.removeFavorite(f.ticketId).subscribe((response) => {
      this.delete.emit(f);
    });
  }
}

