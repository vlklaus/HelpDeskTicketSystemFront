import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { FavoritesService } from '../../services/favorites.service';
import { TicketModel } from '../../models/tickets';
import { FormsModule } from '@angular/forms';
import { TicketFormComponent } from '../ticket-form/ticket-form.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [FormsModule, TicketFormComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  constructor(
    private _ticketService: TicketsService,
    private _favService: FavoritesService
  ) {}

  allTickets: TicketModel[] = [];
  formTicket: TicketModel = {} as TicketModel;

  ngOnInit() {
    this.getTickets();
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

  /* isCompleted() {
    this.
  } */
}
