import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ReviewWidgetComponent } from './review/review-widget/review-widget.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    ReviewWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
