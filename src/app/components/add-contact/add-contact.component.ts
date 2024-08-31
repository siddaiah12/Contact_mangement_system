import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { contact } from '../contactmodel';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
 
  contactForm : FormGroup
data: any;

  constructor( private fb : FormBuilder, private contctservice:ContactService,private router:Router){
    this.contactForm=this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobileNumber: ["", Validators.required],
      city: ["", Validators.required],
    })
  }
  
  submitContactForm(data:contact){
    // console.log(this.contactForm.value);
    this.contctservice.addContactDetails(data).subscribe((res=>{

      this.contactForm.reset();
      this.router.navigate(["/ContactList"])
    }))
   
    // this.contactForm.reset()
  }
  ngOnInit(): void {

    
  }
  
}
