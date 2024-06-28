import { Component, EventEmitter, Output } from '@angular/core';
import { FavoriteModel, TicketModel } from '../../models/tickets';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css',
})
export class TicketFormComponent {
  constructor (private _ticketsService: TicketsService) {}
  formTicket: TicketModel = {} as TicketModel;
  showThankYou: boolean = false;

  submitTicket() {
    this.formTicket.completed = false;
    this._ticketsService.addTicket(this.formTicket).subscribe();
    this.showThankYou = true;
  }



}