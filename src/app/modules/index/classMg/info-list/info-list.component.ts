import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {

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

  public pageInfo: any = {
    current: 3,
    total: 150,
    size: 15
  }

  public selectedValue: any = 1;

  public secData: any[] = [
    {
      value: 1,
      label: '华二小学六年级Python班'
    }, {
      value: 2,
      label: '华二小学五年级Python班'
    }, {
      value: 3,
      label: '华二小学四年级---Python班'
    }, {
      value: 4,
      label: '三年级Python班'
    }, {
      value: 5,
      label: '华二小学二年级Python班'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
