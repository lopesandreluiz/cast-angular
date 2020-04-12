import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConsultCoursesComponent } from './components/consult-courses/consult-courses.component';
import { CoursesRegistrationComponent } from './components/courses-registration/register-courses.component';

const routes: Routes = [
  { path: '', component: ConsultCoursesComponent },
  { path: 'cadastro-curso', component: CoursesRegistrationComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
