import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
// import { PageCrudComponent } from './page-crud/page-crud.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  }, 
  {
    path: 'crud',
    component: CrudComponent,
  }, 
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
