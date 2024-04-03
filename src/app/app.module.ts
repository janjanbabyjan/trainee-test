import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BoxDetailsComponent } from './box-details/box-details.component';
import { ShowOutputComponent } from './show-output/show-output.component';
import { CrudComponent } from './crud/crud.component';
// import { PagecrudComponent } from './pagecrud/pagecrud.component';
// import { PageCrudComponent } from './page-crud/page-crud.component';
// import { ShowOutputComponent } from './show-output/show-output.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DetailsComponent,
    HomeComponent,
    BoxDetailsComponent,
    ShowOutputComponent,
    CrudComponent
    // PagecrudComponent,
    // PageCrudComponent,
    // ShowOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
