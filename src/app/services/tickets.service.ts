import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketModel } from '../models/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }


  url: string = "https://localhost:7110";

  getAll():Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${this.url}/api/Ticket`);
  }

  addTicket(newTicket:TicketModel):Observable<TicketModel>{
    return this.http.post<TicketModel>(`${this.url}/api/Ticket`, newTicket);
  }

  updateTicket(updateTicket:TicketModel):Observable<void>{
    return this.http.put<void>(`${this.url}/api/Ticket/${updateTicket.id}`, updateTicket)
  }

  deleteTicket(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/api/Ticket/${id}`);
  }

}
