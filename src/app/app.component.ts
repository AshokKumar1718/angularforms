import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
 
  exform: FormGroup;
showAge=false;
specialchars= false;
  ngOnInit() {
  this.exform = new FormGroup({
    'name' : new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(50),]),
    'gender':  new FormControl(null,Validators.required),
    // 'email' : new FormControl(null, [Validators.required, Validators.email]),
    'country' : new FormControl(null, Validators.required),
    'city' : new FormControl(null, Validators.required),    
    'age' : new FormControl(null, Validators.required),
    // 'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
  });
  }
  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {

    console.log("name")
    if (this.nameRegexp.test(this.exform.get('name').value)) {
      this.specialchars =  true;
      console.log(this.specialchars,"sp")
     console.log("name has spe",this.exform.get('name'))
     
    }else{
      return this.exform.get('name');
    }
    
  }
 
  get country() {
    console.log("country",this.exform.get('country').value)
    if(this.exform.get('country').value =='USA' || this.exform.get('country').value =='India'|| this.exform.get('country').value =='Canada'){
      this.showAge = true;
      console.log("true")
    }
    return this.exform.get('country');
  }
  get city() {
    return this.exform.get('city');
  }
  get age() {
    return this.exform.get('age');
  }
  get gender() {
    return this.exform.get('gender');
  }
}