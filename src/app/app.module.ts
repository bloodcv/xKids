import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { HeadComponent } from './components/head/head.component';
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
import { IconsProviderModule } from './icons-provider.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    HeadComponent,
    ClassMgComponent,
    InfoListComponent,
    ReleaseInfoComponent,
    AddClassComponent,
    StudentMgComponent,
    AddStudentComponent,
    WatchParentComponent,
    TeacherMgComponent,
    AddTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    IconsProviderModule
  ],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
