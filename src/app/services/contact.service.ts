import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from '../components/contactmodel';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  addContactDetails(data:contact){
    return this.http.post<contact>("http://localhost:3000/posts",data)
 }
 getContactDetails(){
  return this.http.get<contact[]>("http://localhost:3000/posts")
 }
 deleteContactDetails(id:number){
  return this.http.delete<contact>(`http://localhost:3000/posts/${id}`)
 }
 fetchData(id:number){
  return this.http.get<contact>("http://localhost:3000/posts/"+id)
 }
 updateContctDetails(data:contact,id:number){
  return this.http.put<contact>("http://localhost:3000/posts/"+id,data)
 }
}
