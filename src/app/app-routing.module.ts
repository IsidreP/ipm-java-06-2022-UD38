import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'detail', component:DetailComponent},
  {path:'about', component:AboutComponent},
  {path:'detalle/:id', component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
