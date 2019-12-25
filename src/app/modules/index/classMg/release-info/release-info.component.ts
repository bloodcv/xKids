import { Component, OnInit } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-release-info',
  templateUrl: './release-info.component.html',
  styleUrls: ['./release-info.component.scss']
})
export class ReleaseInfoComponent implements OnInit {

  releaseInfoForm: FormGroup;

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
  public classData: any[] = [
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
  public typeData: any[] = [
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
  public publishUserData: any[] = [
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
    for (const i in this.releaseInfoForm.controls) {
      this.releaseInfoForm.controls[i].markAsDirty();
      this.releaseInfoForm.controls[i].updateValueAndValidity();
    }
    console.log('提交数据', value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.releaseInfoForm = this.fb.group({
      school: [null, [Validators.required]], // 选择学校
      class: [null, [Validators.required]], // 选择班级
      title: [null, [Validators.required]], // 标题
      type: [null, [Validators.required]], // 类别
      publishUser: [null, [Validators.required]], // 发布人
      description: [null, [Validators.required]], // 说明
      files: [null, [Validators.required]] //添加图片
    });
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

}
