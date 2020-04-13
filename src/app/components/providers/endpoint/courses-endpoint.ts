import { environment } from 'src/environments/environment';

export class CourseEndpoint {

    public static getCourses() {
        return environment.apiUrl + "course/findAll";
    }

    public static insertCourse() {
        return environment.apiUrl + "course/save";
    }

    public static alterCourse(courseId: number) {
        return environment.apiUrl + "course/alter/" + courseId;
    }

    public static deleteCourse(courseId: number) {
        return environment.apiUrl + "course/delete/" + courseId;
    }
}