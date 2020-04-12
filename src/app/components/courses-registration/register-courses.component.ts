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

  categorias: CategoryModel[] = [];
  curso: CourseModel = new CourseModel();

  constructor(private categoriaService: CategoryService, private service: CourseService) {
    // descomentar a chamada do método e remover o mock das categorias
    for(let i = 0; i<=5; i++) {
      let categoria: CategoryModel = new CategoryModel();
      categoria.id = i;
      categoria.description = "materia " + i;
      this.categorias.push(categoria);
    }
    // this.getCategorias();

   }

  ngOnInit() {
  }

  salvar() {
    this.service.insertCurso(this.curso)
    .pipe()
    .subscribe(resp => {
      console.info("Curso cadastrado com sucesso! id: " + resp.id);
    }, erro => {
      console.info("erro ao cadastrar o curso " + erro);
    })
  }

  private getCategorias() {
    this.categoriaService.getCategories()
    .pipe()
    .subscribe(resp => {
      this.categorias = resp;
    }, erro => {
      console.info("Erro ao carregar as categorias " + erro);
    });
  }

}
