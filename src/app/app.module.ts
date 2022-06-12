import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormComponent } from './form/form.component';
import { UserService } from './Service/UserService';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SideBarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
