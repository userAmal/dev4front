import { ReservationServiceService } from '../services/reservation-service.service';
import { reservation } from './../../model/reservation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {
  reservations : reservation[]; 
   constructor(private eleveService: ReservationServiceService) {
    this.reservations = [];
    }
    
  
  
   ngOnInit(): void {
    this.chargereleves();
    }
   
    chargereleves(){
      this.eleveService.listereservations().subscribe(res => {
        console.log(res);
        this.reservations = res;
        });
    }
  

  


}
