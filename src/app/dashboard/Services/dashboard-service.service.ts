import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDashboard } from '../interfaces/dashboard-response-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  baseURL = "https://1.api.fy23ey05.careers.ifelsecloud.com/";
  constructor(private http: HttpClient) { }

  public getResponseData(){
    return this.http.get<IDashboard>(this.baseURL)
  }
}
