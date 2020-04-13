import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../providers/model/category-model';
import { CourseModel } from '../providers/model/course-model';
import { CourseService } from '../providers/services/courses-service';
import { CategoryService } from '../providers/services/category-service';

@Component({
  selector: 'app-courses-registration',
  templateUrl: './register-courses.component.html',
  styleUrls: ['./register-courses.component.css']
})
export class CoursesRegistrationComponent implements OnInit {

  categories: CategoryModel[] = [];
  course: CourseModel = new CourseModel();

  constructor(private categoryService: CategoryService, private service: CourseService) {

   }

  ngOnInit() {
  }

  salvar() {
    this.service.insertCourse(this.course)
    .pipe()
    .subscribe(resp => {
      console.info("Curso cadastrado com sucesso! id: " + resp.id);
    }, erro => {
      console.info("erro ao cadastrar o curso " + erro);
    })
  }

  private getCategories() {
    this.categoryService.getCategories()
    .pipe()
    .subscribe(resp => {
      this.categories = resp;
    }, erro => {
      console.info("Erro ao carregar as categorias " + erro);
    });
  }

}
