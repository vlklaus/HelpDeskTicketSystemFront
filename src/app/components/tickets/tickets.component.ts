import { Component, Input } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { FavoritesService } from '../../services/favorites.service';
import { FavoriteModel, TicketModel } from '../../models/tickets';
import { FormsModule } from '@angular/forms';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { SingleTicketComponent } from "../single-ticket/single-ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [FormsModule, TicketFormComponent, FavoritesComponent, SingleTicketComponent]
})
export class TicketsComponent {
  constructor(
    private _ticketService: TicketsService,
    private _favService: FavoritesService,
    private socialAuthServiceConfig: SocialAuthService
    
  ) {} 
    

  user:SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  displayTicket: TicketModel = {} as TicketModel;
  allTickets: TicketModel[] = [];
  formTicket: TicketModel = {} as TicketModel;


  ngOnInit() {
    this.getTickets();
    this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser) => {
      this.user = userResponse;
      //if login fails, it will return null.
      this.loggedIn = (userResponse != null);
    });
  }

  getTickets() {
    this._ticketService.getAll().subscribe((response: TicketModel[]) => {
      console.log(response);
      this.allTickets = response;
    });
  }

  addTicket() {
    this._ticketService
      .addTicket(this.formTicket)
      .subscribe((response: TicketModel) => {
        this.getTickets();
      });
  }

  CompleteTicket(ticket:TicketModel){
    this.displayTicket.completed = !this.displayTicket.completed;
  }


  AddFav(t:TicketModel){
    let f:FavoriteModel = {} as FavoriteModel;
    f.ticketId = t.id;
    f.UserId = this.user.id;
    this._favService.addFavorite(f).subscribe((response:FavoriteModel)=>{
      console.log(response);
    })
  }

  deleteTicket(i:TicketModel){
    let index:number=this.allTickets.findIndex(x=> x == i)
    this.allTickets.splice(index, 1)
  }

  
}
