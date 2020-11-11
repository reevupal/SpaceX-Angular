import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  

  constructor(private http : HttpClient) { }

  getAllRecords(){

    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  filterRecords(reqObj: { year: any; launch: any; land: any; }) {
    console.log(reqObj);
    
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100',{
      params: {
        launch_success: reqObj.launch,
        land_success: reqObj.land,
        launch_year : reqObj.year
      }
    }
      );
  }
}
