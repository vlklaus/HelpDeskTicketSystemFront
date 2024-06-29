import { Component } from '@angular/core';
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
  fidnumbers: number[] = [];
  user: SocialUser = {} as SocialUser;
  displayFav: boolean = false;

  ngOnInit() {
    this.GetFavs();
  }
  toggleDisplay() {
    this.displayFav = !this.displayFav;
  }
  GetFavs() {
    this._favService.getAll().subscribe((response: FavoriteModel[]) => {
      console.log(response);
      this.allFavs = response;
      this.GetFavs();
    });
  }

// GetFavoriteTicketIds() {
//   this._favService.getAllTicketIds()
//     .subscribe(ticketIds => {
//       this.fidnumbers = ticketIds;
//     });
// }

isFavorite(ticketId: number):boolean{
  return this.fidnumbers.includes(ticketId);
}

  DeleteFav(f: FavoriteModel) { 
    this._favService.removeFavorite(f.ticketId).subscribe((response) => {
      this.GetFavs();

    });
  }
}


      /*   let f: FavoriteModel = {} as FavoriteModel; 
        f.ticketId = t.id;
        f.UserId = this.user.id; */
    /*     this._favService.DeleteFavorite(t.id).subscribe((response: FavoriteModel) => {
        this.DeleteFav()); */