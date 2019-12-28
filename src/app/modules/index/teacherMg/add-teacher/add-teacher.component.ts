import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  passwordVisible = false;
  addTeacherForm: FormGroup;

  public sexData: any[] = [
    {
      value: 1,
      label: '男'
    }, {
      value: 2,
      label: '女'
    }
  ];
  public identityData: any[] = [
    {
      value: 1,
      label: '讲师'
    }, {
      value: 2,
      label: '助教'
    }
  ];

  submitForm(value: any): void {
    for (const i in this.addTeacherForm.controls) {
      this.addTeacherForm.controls[i].markAsDirty();
      this.addTeacherForm.controls[i].updateValueAndValidity();
    }
    console.log('提交数据', value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addTeacherForm = this.fb.group({
      name: [null, [Validators.required]], // 姓名
      sex: [null, [Validators.required]], // 性别
      tel: [null, [Validators.required]], // 电话
      password: [null, [Validators.required]], // 密码
      identity: [null, [Validators.required]], // 身份
    });
  }

}
