import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/services/api.service';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-all-conbinations',
  templateUrl: './all-conbinations.component.html',
  styleUrls: ['./all-conbinations.component.scss']
})
export class AllConbinationsComponent implements OnInit {
  constructor(private service: ApiService,private router: Router, private dataService:DataServiceService) { }
 allCombinations :[];
startListIndex:number;
flag:boolean=false;

  ngOnInit(): void {
    //כשהגענו לדף נעדכן מה האינדקס עכשיו
  this.startListIndex= this.dataService.index;
   this.getData();
  }
  
  back(){
    this.dataService.displayLastCombination=true;
    this.router.navigate(['']);
  }

  getData(){
    this.service.getAllAPI(environment.combinationPagingCount).subscribe((res:[])=>{
      debugger;
      this.allCombinations = res;
      this.dataService.lastCombination=res.slice(-1)[0];

     // אם האינדקס מאותחל במשהו אז תוסיף 10 לפעם הבאה ותשמור לפעם הבאה
      this.dataService.index? this.dataService.index += res.length:
      this.dataService.index = res.length;

      //וברגע שהדגל יהיה אמת, כפתור הבא יהיה לא ויזואלי
      if (this.dataService.index==this.dataService.combinationCounts){
        this.flag=true;
      }
    })
  }

  nextPage(){
    this.startListIndex=this.dataService.index;
    this.getData();
  }

}
