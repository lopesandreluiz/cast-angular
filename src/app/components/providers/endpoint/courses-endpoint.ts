import { environment } from 'src/environments/environment';

export class CourseEndpoint {

    public static getCursos() {
        return environment.apiUrl + "course/findAll";
    }

    public static insertCurso() {
        return environment.apiUrl + "cursos/inserir";
    }

    public static alteraCurso() {
        return environment.apiUrl + "cursos/alterar";
    }

    public static deletaCurso(id: number) {
        return environment.apiUrl + "cursos/deletar/" + id;
    }
}