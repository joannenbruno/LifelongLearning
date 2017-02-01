import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Person } from '../classes/Person';

@Injectable()
export class PersonService {
    constructor(private http: Http) { }
    private uri: string = "http://localhost:9999/api/person";

    searchPeople(searchString: string): Promise<Person[]> {
        return this.http
            .get(this.uri + "/" + searchString)
            .toPromise()
            .then(response => 
                response.json() as Person[])
            .catch(this.handleError);
    }
    private handleError(error: any): any {
        var errMsg = error.message
            ? error.message
            : error.staus
                ? error.status + error.statusText
                : "-- An Error Occured. Please stand by.";
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}
