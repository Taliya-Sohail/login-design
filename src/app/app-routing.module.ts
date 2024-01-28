import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"**",
    component:HomeComponent
  },
  {
  path:"about",
  component:AboutComponent
      },
  {
    path:"",
    redirectTo:"/products",
    pathMatch:'full'
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
