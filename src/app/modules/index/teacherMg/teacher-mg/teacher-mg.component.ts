import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-mg',
  templateUrl: './teacher-mg.component.html',
  styleUrls: ['./teacher-mg.component.scss']
})
export class TeacherMgComponent implements OnInit {

  public testData: any[] = [
    {
      key: '1',
      name: '李白',
      identity: '讲师',
      tel: '180-0000-0000'
    }, {
      key: '2',
      name: '李白',
      identity: '讲师',
      tel: '180-0000-0000'
    }, {
      key: '3',
      name: '李白',
      identity: '助教',
      tel: '180-0000-0000'
    }, {
      key: '4',
      name: '李白',
      identity: '助教',
      tel: '180-0000-0000'
    }
  ];

  public pageInfo: any = {
    current: 3,
    total: 150,
    size: 15
  }

  constructor() { }

  ngOnInit() {
  }

}
