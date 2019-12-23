import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
// classMg
import { ClassMgComponent } from './components/index/classMg/class-mg/class-mg.component';
import { InfoListComponent } from './components/index/classMg/info-list/info-list.component';
import { ReleaseInfoComponent } from './components/index/classMg/release-info/release-info.component';
import { AddClassComponent } from './components/index/classMg/add-class/add-class.component';
// studentMg
import { StudentMgComponent } from './components/index/studentMg/student-mg/student-mg.component';
import { AddStudentComponent } from './components/index/studentMg/add-student/add-student.component';
import { WatchParentComponent } from './components/index/studentMg/watch-parent/watch-parent.component';
// teacherMg
import { TeacherMgComponent } from './components/index/teacherMg/teacher-mg/teacher-mg.component';
import { AddTeacherComponent } from './components/index/teacherMg/add-teacher/add-teacher.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: 'classMg/index',
        component: ClassMgComponent
      }, {
        path: 'classMg/infoList',
        component: InfoListComponent
      }, {
        path: 'classMg/releaseInfo',
        component: ReleaseInfoComponent
      }, {
        path: 'classMg/addClass',
        component: AddClassComponent
      }, {
        path: 'studentMg/index',
        component: StudentMgComponent
      }, {
        path: 'studentMg/addStudent',
        component: AddStudentComponent
      }, {
        path: 'studentMg/watchParent',
        component: WatchParentComponent
      }, {
        path: 'teacherMg/index',
        component: TeacherMgComponent
      }, {
        path: 'teacherMg/addTeacher',
        component: AddTeacherComponent
      }, {
        path: '**',
        redirectTo: 'classMg/index'
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
