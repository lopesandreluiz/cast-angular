import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConsultCoursesComponent } from './components/consult-courses/consult-courses.component';
import { AppRoutingModule } from './app-routing.module';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import { CourseService } from './components/providers/services/courses-service';
import { CategoryService } from './components/providers/services/category-service';
import { CoursesRegistrationComponent } from './components/courses-registration/register-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultCoursesComponent,
    CoursesRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    TableModule,
    DropdownModule,
    SliderModule,
    MultiSelectModule
  ],
  providers: [
    CourseService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
