import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5122/api/NumberGenerator';
  constructor( private http: HttpClient) { }
 
  public getNumCombination(combinationNum:number):Observable<number>{
    return this.http.get<any>(this.apiUrl+"/StartAPI?n=" +combinationNum, { withCredentials: true });
  }
 public getNextCombination():Observable<number[]>{
  return this.http.get<any>(this.apiUrl+"/GetNextAPI", { withCredentials: true });
 }
 public getAllAPI(numOfRows):Observable<any>{
  return this.http.get<any>(this.apiUrl+"/GetAllAPI?numOfRows=" +numOfRows, { withCredentials: true });
 }
}
