import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  categories = [
    { id: 1, name: 'Computers' },
    { id: 2, name: 'Sicology' },
  ];

  form = new FormGroup({
    courseName: new FormControl(),
    categories: new FormControl(),
  });

  constructor(fb: FormBuilder) {
    fb.group({ courseName: [], categories: [] });
  }

  submit(f) {
    console.log(f);
  }
}
