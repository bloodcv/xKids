import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-mg',
  templateUrl: './class-mg.component.html',
  styleUrls: ['./class-mg.component.scss']
})
export class ClassMgComponent implements OnInit {

  public testData: any[] = [
    {
      key: '1',
      schoool: '华二小学',
      class: '六年级Python班',
      type: 'NOIP',
      teacher: '王老师',
      helper: '李老师',
      create: '2019-10-10'
    }, {
      key: '2',
      schoool: '华二小学',
      class: '六年级Python班',
      type: 'NOIP',
      teacher: '王老师',
      helper: '李老师',
      create: '2019-10-10'
    }, {
      key: '3',
      schoool: '华二小学',
      class: '六年级Python班',
      type: 'NOIP',
      teacher: '王老师',
      helper: '李老师',
      create: '2019-10-10'
    }, {
      key: '4',
      schoool: '华二小学',
      class: '六年级Python班',
      type: 'NOIP',
      teacher: '王老师',
      helper: '李老师',
      create: '2019-10-10'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
