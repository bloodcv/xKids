import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-parent',
  templateUrl: './watch-parent.component.html',
  styleUrls: ['./watch-parent.component.scss']
})
export class WatchParentComponent implements OnInit {

  public studentName: any = '李白';
  public className: any = '华二小学六年级Python班';

  public testData: any[] = [
    {
      key: '1',
      parentName: '李黑',
      relation: '爸爸',
      tel: '180-0000-0000',
      status: '已确认'
    }, {
      key: '2',
      parentName: '李黑',
      relation: '妈妈',
      tel: '180-0000-0000',
      status: '已确认'
    }, {
      key: '3',
      parentName: '李黑',
      relation: '爷爷',
      tel: '180-0000-0000',
      status: '已确认'
    }, {
      key: '4',
      parentName: '李黑',
      relation: '奶奶',
      tel: '180-0000-0000',
      status: '未确认'
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
