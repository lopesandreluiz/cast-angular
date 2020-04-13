import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../model/course-model';
import { CourseEndpoint } from '../endpoint/courses-endpoint';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    constructor(private http: HttpClient) { }
    
    public getCourses() : Observable<CourseModel[]> {
        return this.http.get<CourseModel[]>(CourseEndpoint.getCourses());
    }

    public insertCourse(course: CourseModel) : Observable<CourseModel> {
        return this.http.post<CourseModel>(CourseEndpoint.insertCourse(), course);
    }

    public alterCourse(course: CourseModel, id : number) : Observable<CourseModel> {
        return this.http.put<CourseModel>(CourseEndpoint.alterCourse(id), course);
    }

    public deleteCourse(id: number) : Observable<CourseModel> {
        return this.http.delete<CourseModel>(CourseEndpoint.deleteCourse(id));
    }
}