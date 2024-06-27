import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { FavoritesService } from '../../services/favorites.service';
import { TicketModel } from '../../models/tickets';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  constructor(
    private _ticketService: TicketsService,
    private _favService: FavoritesService
  ) {}





}
