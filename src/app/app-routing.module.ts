import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllConbinationsComponent } from './components/all-conbinations/all-conbinations.component';
import { CombinationComponent } from './components/combination/combination.component';

const routes: Routes = [
  { path: '', component: CombinationComponent },
  { path: 'all', component: AllConbinationsComponent }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
