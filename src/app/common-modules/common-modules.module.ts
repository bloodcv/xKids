import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [HeadComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    HeadComponent
  ] //这里将共享的组件放入到导出的出口中
})
export class CommonModulesModule { }
