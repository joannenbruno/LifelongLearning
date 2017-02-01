import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './components/app/app.component';
import { PersonSearchComponent } from './components/person/person-search.component';
import { PersonService } from './services/person.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, PersonSearchComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
