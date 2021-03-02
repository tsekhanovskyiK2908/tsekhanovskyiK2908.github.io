import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  // constructor(private formBuilder: FormBuilder) { }

  // bookingForm = this.formBuilder.group({
  //   fullName:['', Validators.compose([Validators.required, Validators.minLength(5)])],
  //   email:['', Validators.required],
  //   groupSize:['', Validators.required]
  // });

  bookingForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    groupSize: new FormControl('')
  });


  ngOnInit(): void {
  }

  onSubmit() {

  }

}
