import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  addStudentForm: FormGroup;

  public sexData: any[] = [
    {
      value: 1,
      label: '男'
    }, {
      value: 2,
      label: '女'
    }
  ];
  public classData: any[] = [
    {
      value: 1,
      label: '华二小学六年级Python班'
    }, {
      value: 2,
      label: '华二小学五年级Python班'
    }
  ];

  submitForm(value: any): void {
    for (const i in this.addStudentForm.controls) {
      this.addStudentForm.controls[i].markAsDirty();
      this.addStudentForm.controls[i].updateValueAndValidity();
    }
    console.log('提交数据', value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addStudentForm = this.fb.group({
      name: [null, [Validators.required]], // 姓名
      sex: [null, [Validators.required]], // 性别
      birthDay: [null, [Validators.required]], // 生日
      school: [null, [Validators.required]], // 学校
      class: [null, [Validators.required]], // 班级
      parentName: [null, [Validators.required]], // 家长姓名
      tel: [null, [Validators.required]] // 电话
    });
  }

}
