import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketModel } from '../models/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  url: string = "https://localhost:7110"; //Victoria

  getAll():Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${this.url}/api/Ticket`);
  }


}
