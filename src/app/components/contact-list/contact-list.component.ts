import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  // data: any;
  data: undefined | contact[]
  constructor(private contactservice:ContactService){}

  ngOnInit(): void {

    this.getContact()
  }
  getContact(){
      this.contactservice.getContactDetails().subscribe(res=>{
        this.data =res;
      })
  }
  deleteContact(id:number){
    this.contactservice.deleteContactDetails(id).subscribe(res=>{
       alert('Contact Deleted Successfully!!')
       this.getContact()
    })
  }
  logOut(){
    localStorage.removeItem('loginData')
  }
}
