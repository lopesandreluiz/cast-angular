import { environment } from 'src/environments/environment';

export class CategoryEndpoint {

    public static getCategories() {
        return environment.apiUrl + "/category/findAll";
    }

    public static loadCategory() {
        return environment.apiUrl + "/category/load";
    }
}