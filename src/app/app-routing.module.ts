import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './cards/mainpage/mainpage.component';
import { ListpagesComponent } from './websitedesign/listpages/listpages.component';

const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'sample',component:ListpagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
