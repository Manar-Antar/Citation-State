import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCitationStateService {

  constructor(private http:HttpClient) {
   }

   getCitationStateData():Observable<any>{
    return this.http.get('./../assets/json/test.json');

   }
}
