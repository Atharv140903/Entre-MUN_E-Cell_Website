import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PreparationComponent } from './pages/preparation/preparation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChaptersComponent,
    RegisterComponent,
    AboutusComponent,
    PreparationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
