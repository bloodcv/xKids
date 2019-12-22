import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: 'classMg',
        loadChildren: './modules/class-mg/class-mg.module#ClassMgModule'
      }, {
        path: 'studentMg',
        loadChildren: './modules/student-mg/student-mg.module#StudentMgModule'
      }, {
        path: 'teacherMg',
        loadChildren: './modules/teacher-mg/teacher-mg.module#TeacherMgModule'
      }, {
        path: '**',
        redirectTo: '/classMg'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
