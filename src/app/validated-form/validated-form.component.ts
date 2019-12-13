import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-validated-form',
  templateUrl: './validated-form.component.html',
  styleUrls: ['./validated-form.component.scss']
})
export class ValidatedFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]],
      age: [null, [
        Validators.required,
        Validators.min(18),
        Validators.max(65)
      ]]
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

}
