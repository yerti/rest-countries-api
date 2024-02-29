import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDetailCountryComponent } from './page/all-detail-country/all-detail-country.component';
import { DetailCountriComponent } from './page/detail-countri/detail-countri.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch: 'full'},
  {path:'inicio', component: AllDetailCountryComponent},
  {path:'country/:name', component: DetailCountriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
