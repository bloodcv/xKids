import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';

// classMg
import { AddClassComponent } from './classMg/add-class/add-class.component';
import { ClassMgComponent } from './classMg/class-mg/class-mg.component';
import { InfoListComponent } from './classMg/info-list/info-list.component';
import { ReleaseInfoComponent } from './classMg/release-info/release-info.component';
// studentMg
import { AddStudentComponent } from './studentMg/add-student/add-student.component';
import { StudentMgComponent } from './studentMg/student-mg/student-mg.component';
import { WatchParentComponent } from './studentMg/watch-parent/watch-parent.component';
// teacherMg
import { AddTeacherComponent } from './teacherMg/add-teacher/add-teacher.component';
import { TeacherMgComponent } from './teacherMg/teacher-mg/teacher-mg.component';

const routes: Routes = [
  {
    path: '',
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
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
