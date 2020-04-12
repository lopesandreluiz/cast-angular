import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../model/course-model';
import { CourseEndpoint } from '../endpoint/courses-endpoint';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    constructor(private http: HttpClient) { }
    
    public getCursos() : Observable<CourseModel[]> {
        return this.http.get<CourseModel[]>(CourseEndpoint.getCursos());
    }

    public insertCurso(curso: CourseModel) : Observable<CourseModel> {
        return this.http.post<CourseModel>(CourseEndpoint.insertCurso(), curso);
    }

    public alteraCurso(curso: CourseModel) : Observable<CourseModel> {
        return this.http.put<CourseModel>(CourseEndpoint.alteraCurso(), curso);
    }

    public deletaCurso(id: number) : Observable<CourseModel> {
        return this.http.delete<CourseModel>(CourseEndpoint.deletaCurso(id));
    }
}