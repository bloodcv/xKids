import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-mg',
  templateUrl: './student-mg.component.html',
  styleUrls: ['./student-mg.component.scss']
})
export class StudentMgComponent implements OnInit {

  public testData: any[] = [
    {
      key: '1',
      name: '李白',
      sex: '男',
      birthday: '2000-10-10',
      school: '华二小学',
      className: '六年级Python班',
      parentName: '李黑',
      parentTel: '180-0000-0000'
    }, {
      key: '2',
      name: '李白',
      sex: '男',
      birthday: '2000-10-10',
      school: '华二小学',
      className: '六年级Python班',
      parentName: '李黑',
      parentTel: '180-0000-0000'
    }, {
      key: '2',
      name: '李白',
      sex: '男',
      birthday: '2000-10-10',
      school: '华二小学',
      className: '六年级Python班',
      parentName: '李黑',
      parentTel: '180-0000-0000'
    }, {
      key: '2',
      name: '李白',
      sex: '男',
      birthday: '2000-10-10',
      school: '华二小学',
      className: '六年级Python班',
      parentName: '李黑',
      parentTel: '180-0000-0000'
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
