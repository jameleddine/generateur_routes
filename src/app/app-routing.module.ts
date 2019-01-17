import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DisplayComponent } from './display/display.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path:'',component:DashComponent},
  {path:'display',component:DisplayComponent},
  {path:'page/:path',component:NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
