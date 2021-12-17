import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  userForm: FormGroup
  listData: any

  constructor(private fb:FormBuilder){
    this.listData = [
      {name: "روح الله", mobile: "09192902393", age: "23"},
    ];
      this.userForm = this.fb.group ({
        name: ['', Validators.required],
        mobile: ['', Validators.required],
        age: ['', Validators.required]
      })
  }

  public AddItem(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  public Reset(): void {
    this.userForm.reset();
  }

  public removeItem (element: any) {
    this.listData.forEach ((value: any, index: any) => {
      if (value == element)
      this.listData.splice (index, 1)
    });
  }

  ngOnInit(){

  }

  title = 'پروژه آزمایشی انگولار';
}
