import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TicketsService } from '../../services/tickets.service';
import { TicketModel } from '../../models/tickets';

@Component({
  selector: 'app-resolution-form',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './resolution-form.component.html',
  styleUrl: './resolution-form.component.css'
})
export class ResolutionFormComponent {
  constructor(private _ticketsService:TicketsService, private route:ActivatedRoute) {}

  formResolution: TicketModel = {} as TicketModel;
  resolvedBy: string = "";

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id: number = Number(params.get("id"));
      this._ticketsService.getById(id).subscribe((response) => {
        this.formResolution = response;
      })
    })
  }

  updateTicket() {
    this._ticketsService.updateTicket(this.formResolution).subscribe((response) => {}); 
  }

}
