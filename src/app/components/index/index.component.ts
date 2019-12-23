import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public menuData: any[] = [
    {
      title: '班级',
      children: [
        {
          name: '班级管理',
          link: '/index/classMg/index',
          activeClass: 'active'
        }, {
          name: '信息列表',
          link: '/index/classMg/infoList',
          activeClass: 'active'
        }, {
          name: '发布信息',
          link: '/index/classMg/releaseInfo',
          activeClass: 'active'
        }, {
          name: '添加班级',
          link: '/index/classMg/addClass',
          activeClass: 'active'
        }
      ]
    }, {
      title: '学生',
      children: [
        {
          name: '学生管理',
          link: '/index/studentMg/index',
          activeClass: 'active'
        }, {
          name: '添加学生',
          link: '/index/studentMg/addStudent',
          activeClass: 'active'
        }, {
          name: '查看家长',
          link: '/index/studentMg/watchParent',
          activeClass: 'active'
        }
      ]
    }, {
      title: '老师',
      children: [
        {
          name: '老师管理',
          link: '/index/teacherMg/index',
          activeClass: 'active'
        }, {
          name: '添加老师',
          link: '/index/teacherMg/addTeacher',
          activeClass: 'active'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
