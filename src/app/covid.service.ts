import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private _covidInfoUrls: string[] = ["https://www.government.nl/topics/coronavirus-covid-19/tackling-new-coronavirus-in-the-netherlands"];

  constructor(private http: HttpClient) {
   }

  getInfo(){
    this.http.get(this._covidInfoUrls[0]).subscribe((res:any)=>{
        console.log("Response: ", res)
    })
  }
}
