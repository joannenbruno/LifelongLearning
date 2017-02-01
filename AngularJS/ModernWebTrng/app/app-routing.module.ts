import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonSearchComponent } from './components/person/person-search.component';
import { AppComponent } from "./components/app/app.component";

const routes: Routes = [
    {path: "", redirectTo: '/search', pathMatch: "full" },
    { path: "search", component: PersonSearchComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    bootstrap: [ AppComponent ]
})
export class AppRoutingModule {}