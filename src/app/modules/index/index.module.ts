import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

// 引入模块
import { IconsProviderModule } from '../../icons-provider.module';
import { IndexRoutingModule } from './index-routing.module';
import { CommonModulesModule } from '../../common-modules/common-modules.module';

// 引入组件
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

@NgModule({
  declarations: [
    IndexComponent,
    AddClassComponent,
    ClassMgComponent,
    InfoListComponent,
    ReleaseInfoComponent,
    AddStudentComponent,
    StudentMgComponent,
    WatchParentComponent,
    AddTeacherComponent,
    TeacherMgComponent
  ],
  imports: [
    CommonModulesModule, // 共享模块
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    IconsProviderModule
  ],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class IndexModule { }
