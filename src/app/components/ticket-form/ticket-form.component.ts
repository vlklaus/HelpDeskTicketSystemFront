import { Component, EventEmitter, Output } from '@angular/core';
import { TicketModel } from '../../models/tickets';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css',
})
export class TicketFormComponent {
  @Output() SubmittedForm = new EventEmitter<TicketModel>();
  formTicket: TicketModel = {} as TicketModel;

  emitSubmitted() {
    let newTicket: TicketModel = { ...this.formTicket };
    newTicket.completed = false;
    this.SubmittedForm.emit(newTicket);
  }
}
