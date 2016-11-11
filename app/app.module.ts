import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from './search/search.module';
import { SearchComponent } from './search/search.component';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
