import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyToDoComponent } from './component/my-to-do/my-to-do.component';
import { GroupToDoComponent } from './component/group-to-do/group-to-do.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'myToDo', component: MyToDoComponent},
  { path: 'groupToDo', component: GroupToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyToDoComponent, GroupToDoComponent,LoginComponent]
