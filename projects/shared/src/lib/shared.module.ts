import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [{path:'', component: SharedComponent}];
export const routerModule = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    routerModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
