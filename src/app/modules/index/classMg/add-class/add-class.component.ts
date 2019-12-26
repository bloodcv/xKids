import { Component, OnInit } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  addClassForm: FormGroup;

  public schoolData: any[] = [
    {
      value: 1,
      label: '华一小学'
    }, {
      value: 2,
      label: '华二小学'
    }, {
      value: 3,
      label: '华三小学'
    }
  ];
  public classTypeData: any[] = [
    {
      value: 1,
      label: '一年级Python班'
    }, {
      value: 2,
      label: '二年级Python班'
    }, {
      value: 3,
      label: '三年级Python班'
    }
  ];
  public classTeacherData: any[] = [
    {
      value: 1,
      label: '小结'
    }, {
      value: 2,
      label: '中结'
    }, {
      value: 3,
      label: '大结'
    }
  ];
  public classHelperData: any[] = [
    {
      value: 1,
      label: '李老师'
    }, {
      value: 2,
      label: '王老师'
    }, {
      value: 3,
      label: '刘老师'
    }
  ];

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;

  submitForm(value: any): void {
    for (const i in this.addClassForm.controls) {
      this.addClassForm.controls[i].markAsDirty();
      this.addClassForm.controls[i].updateValueAndValidity();
    }
    console.log('提交数据', value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addClassForm = this.fb.group({
      school: [null, [Validators.required]], // 学校名称
      className: [null, [Validators.required]], // 班级名称
      classType: [null, [Validators.required]], // 班级类别
      classTeacher: [null, [Validators.required]], // 班级讲师
      classHelper: [null, [Validators.required]], // 班级助教
      description: [null, [Validators.required]] // 说明
    });
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

}
