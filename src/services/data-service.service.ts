import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  displayLastCombination:boolean=false;
  lastCombination:number[];
  index:number;
  combinationCounts:number;
}
