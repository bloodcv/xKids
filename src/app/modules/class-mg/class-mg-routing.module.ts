import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入子组件

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassMgRoutingModule { }
