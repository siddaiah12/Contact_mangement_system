import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdatecontactComponent } from './components/updatecontact/updatecontact.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'ContactList',
    component:ContactListComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'addContact',
    component:AddContactComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'updateContact/:id',
    component:UpdatecontactComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'

  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
