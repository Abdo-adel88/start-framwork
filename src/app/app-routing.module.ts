import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProtfolioComponent } from './component/protfolio/protfolio.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"contact" , component:ContactComponent},
  {path:"protfolio" , component:ProtfolioComponent},
  {path:"**" , component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
