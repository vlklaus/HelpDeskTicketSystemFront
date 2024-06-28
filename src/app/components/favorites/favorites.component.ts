import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { FavoritesService } from '../../services/favorites.service';
import { FavoriteModel, TicketModel } from '../../models/tickets';
import { TicketsComponent } from '../tickets/tickets.component';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [TicketsComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  constructor(
    private _ticketService: TicketsService,
    private _favService: FavoritesService
  ) {}


  allFavs: FavoriteModel[]= [];
  user:SocialUser = {} as SocialUser;

ngOnInit(){
  this.GetFavs();
}

  GetFavs(){
    this._favService.getAll().subscribe((response:FavoriteModel[])=>{
      console.log(response);
      this.allFavs = response;
    })
  }

  BookMarkTicket(t:TicketModel){
    this._favService.bookmark.ticketId = t.id;
    this._favService.addFavorite(this._favService.bookmark).subscribe((response:FavoriteModel)=>{
      this.GetFavs();
    })
  }

  AddFav(t:TicketModel){
    let f:FavoriteModel = {} as FavoriteModel;
    f.ticketId = t.id;
    f.UserId = this.user.id;
    this._favService.addFavorite(f).subscribe((response:FavoriteModel) =>{
      this.GetFavs();
    })

  }



}
