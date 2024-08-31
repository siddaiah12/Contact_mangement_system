import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit{
  public contactid!:number
  public contactData:contact = {} as contact

  constructor(private contactservice :ContactService,
     private activatedroute:ActivatedRoute,
     private router:Router){
    

  }
ngOnInit(): void {
  this.activatedroute.params.subscribe((param:Params)=>{
  this.contactid = param['id']
  })
  this.contactservice.fetchData(this.contactid).subscribe((data:contact)=>{
  this.contactData = data;
  console.log(data);
  
  })
  
}
update(){
  this.contactservice.updateContctDetails(this.contactData,this.contactid).subscribe((res:contact)=>{
    alert("Details Updated Successfully!!")
  })
}
}
