import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../providers/model/course-model';
import { CourseService } from '../providers/services/courses-service';
import { CategoryService } from '../providers/services/category-service';
import { CategoryModel } from '../providers/model/category-model';


@Component({
  selector: 'app-consult-courses',
  templateUrl: './consult-courses.component.html',
  styleUrls: ['./consult-courses.component.css']
})
export class ConsultCoursesComponent implements OnInit {

  courses: CourseModel[] = [];

  categories: CategoryModel[] = [];

  cols: any[];


  constructor(private courseService: CourseService, private categoryService: CategoryService) {
    
    this.getCourses();
    this.getCategories();

   }

  ngOnInit() {
    
  this.cols = [
      { field: 'id', header: 'id' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'categoria', header: 'Categoria' },
      { field: 'dataInicio', header: 'Data Início' },
      { field: 'dataTermino', header: 'Data Término' },
      { field: 'qtdAlunosTurma', header: 'Qtd Alunos Turma' },
  ];
  }

  private getCourses() {
    this.courseService.getCursos()
    .pipe()
    .subscribe(resp => {
      this.courses = resp;
    }, erro => {
      console.info("Erro ao carregar todos os cursos " + erro)
    })
  }

  public deletaCurso(rowData: CourseModel) {
    this.courseService.deletaCurso(rowData.id).pipe().subscribe(resp => {

    }, erro => {
      console.info("Erro ao deletar Curso " + erro);
    });
  }

  public alteraCurso(event: CourseModel) {
    this.courseService.alteraCurso(event)
    .pipe()
    .subscribe(resp => {
      console.info("Curso Alterado com Sucesso " + resp.description);
    }, erro => {
      console.info("Erro ao alter o curso " + erro);
    });
    this.getCourses();
  }

  private getCategories() {
    this.categoryService.getCategories()
    .pipe()
    .subscribe(resp => {
      this.categories = resp;
    }, erro => {
      console.info("Erro ao carregar todos os cursos " + erro)
    })
  }

}
