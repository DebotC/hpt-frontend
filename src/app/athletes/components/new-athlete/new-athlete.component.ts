import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { required } from 'src/app/shared/validators/required.validators';
import { AthleteType } from '../../model/athlete-type.enum';

@Component({
  selector: 'hpt-new-athlete',
  templateUrl: './new-athlete.component.html',
  styleUrls: ['./new-athlete.component.scss']
})
export class NewAthleteComponent implements OnInit {

  newAthleteForm: FormGroup;
  showErrors: boolean;
  AthleteType = AthleteType;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.newAthleteForm = this.fb.group({
      firstName: [null, [required]],
      lastName: [null, [required]],
      email: [null, [required]],
      type: [null, [Validators.required]]
    });
  }

  cancelCreation(): void {
    this.router.navigate(['/athletes']);
  }

  createAthlete(): void {
    if (this.newAthleteForm.valid) {
      this.showErrors = false;
      console.log('form is valid', this.newAthleteForm.value);
    } else {
      this.showErrors = true;
      console.log('form is invalid');
    }
  }
}
