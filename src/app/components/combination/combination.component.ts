import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss']
})
export class CombinationComponent implements OnInit {
  constructor(private service: ApiService,private router: Router, private activeRoute: ActivatedRoute,
     private formBuilder: FormBuilder, private dataService:DataServiceService) { 

  }

  combinationNumber:number; //הקלט שהוכנס לשלוח לפונקציה
  currentCombinationState: boolean = false; //בשביל התצוגה
  currentCombinationIndex: number = 0;
  combinationCounts: number; //מספר הקומבינציות שיחזור מהשרת
  currentCombination: number[];
  inputControl: FormControl;
 


  ngOnInit(): void {
    this.inputControl=this.formBuilder.control('',[Validators.max(20), Validators.min(1)]); 
    if ( this.dataService.displayLastCombination){
      this.currentCombinationState = true; //בשביל שיוצג החלק הנכו בתצוגה
      this.currentCombinationIndex= this.dataService.index; //לקבל את האינדקס המדוייק
      this.currentCombination=this.dataService.lastCombination;
      this.combinationCounts = this.dataService.combinationCounts;
    }
}
  


  getNumCombination() {
    this.combinationNumber=this.inputControl.value;
    if (this.inputControl.valid) {
      this.service.getNumCombination(this.combinationNumber).subscribe((res: number) => {
        this.dataService.combinationCounts =this.combinationCounts = res;
      })
    }
  }


  allCombination() {
    this.dataService.index= this.currentCombinationIndex;
    this.router.navigate(['all']);
  }

  clear() {
    this.combinationNumber= undefined;
    this.currentCombination= undefined;
    this.currentCombinationIndex =undefined;
    this.currentCombinationState = false;
    this.inputControl.setValue('');
    this.combinationCounts = undefined;
    this.currentCombinationIndex=0;
  }

  next() {
    this.currentCombinationState = true;
    this.service.getNextCombination().subscribe((res: number[]) => {
      this.currentCombinationIndex++;
      this.currentCombination = res;
    })
  }

}
