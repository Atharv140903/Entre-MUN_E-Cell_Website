import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { HomeComponent } from './pages/home/home.component';
import { PreparationComponent } from './pages/preparation/preparation.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'chapters', component: ChaptersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'preparation', component: PreparationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
