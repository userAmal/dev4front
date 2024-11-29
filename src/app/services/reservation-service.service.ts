import { Injectable } from '@angular/core';
import { reservation } from '../../model/reservation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  apiURL: string = 'http://localhost:8080/reservations/api/all';
  reservations! : reservation[]; 
  constructor(private http : HttpClient) { }

  listereservations(): Observable<reservation[]>{
    return this.http.get<reservation[]>(this.apiURL);
    }

}
