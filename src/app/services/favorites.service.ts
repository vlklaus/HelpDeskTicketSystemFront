import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavoriteModel } from '../models/tickets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
   constructor(private http:HttpClient) { }

  url: string = "https://localhost:7110"; //Victoria

  bookmark: FavoriteModel = {} as FavoriteModel;

  currentUser: string = "";

  getAll():Observable<FavoriteModel[]> {
    return this.http.get<FavoriteModel[]>(`${this.url}/api/Favorite`);
  }

  addFavorite(newFavorite:FavoriteModel):Observable<FavoriteModel>{
    return this.http.post<FavoriteModel>(`${this.url}/api/Favorite`, newFavorite)
  }

  removeFavorite(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/api/Favorite/${id}`);
  }

}
