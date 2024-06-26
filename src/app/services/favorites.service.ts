import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteModel } from '../models/tickets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http:HttpClient) { }

  url: string = "https://localhost:7110/"; //Victoria

  getAll():Observable<FavoriteModel[]> {
    return this.http.get<FavoriteModel[]>(`${this.url}/api/Favorite`);
  }
}
