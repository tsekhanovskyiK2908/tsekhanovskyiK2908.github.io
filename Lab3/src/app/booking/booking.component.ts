import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  constructor(){
    this.bookingForm = new FormGroup({});
  }

  ngOnInit(): void {
    
    this.bookingForm = new FormGroup({
      fullName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      email: new FormControl('', Validators.email),
      size: new FormControl('', Validators.required)
    });
    console.log(this.bookingForm.value);
  }

  onSubmit(): void {
  }

}
