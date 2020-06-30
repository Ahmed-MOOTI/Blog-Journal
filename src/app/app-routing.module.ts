import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddarticlesComponent } from  './addarticles/addarticles.component';
import { ListarticlesComponent } from  './addarticles/listarticles/listarticles.component';
import { LoginComponent } from  './auth/login/login.component';
import { RegisterComponent } from  './auth/register/register.component';
import { AuthGuard } from './auth.guard';
import { from } from 'rxjs';
// import { from } from 'rxjs';


const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'newarticle', component: AddarticlesComponent, canActivate: [AuthGuard] },
  { path: 'find', component: ListarticlesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
