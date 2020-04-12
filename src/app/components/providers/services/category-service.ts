import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from '../model/category-model';
import { CategoryEndpoint } from '../endpoint/category-endpoint';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) { }
    
    public getCategories() : Observable<CategoryModel[]> {
        return this.http.get<CategoryModel[]>(CategoryEndpoint.getCategories());
    }

    public insertCategory(curso: CategoryModel) : Observable<CategoryModel> {
        return this.http.post<CategoryModel>(CategoryEndpoint.insertCourse(), curso);
    }
}