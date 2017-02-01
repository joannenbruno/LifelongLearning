import { Component } from '@angular/core';
import { Person } from '../../classes/Person';
import { PersonService } from '../../services/person.service';

@Component({
    moduleId: module.id,
    templateUrl : 'person-search.component.html'
})
export class PersonSearchComponent {
    constructor(private personService: PersonService) {}
    searchText: string = "";
    people: Person[];
    selectedPerson: Person;

    search(): void{
        this.personService
            .searchPeople(this.searchText)
            .then(result => this.people = result);
    }
    onSelect(selectedPerson: Person): void {
        this.selectedPerson = selectedPerson;
    }
}