import { Component } from '@angular/core';

@Component({
    selector: 'gist-search',
    templateUrl: 'app/search/search.html'
})
export class SearchComponent {

    private username: string;
    constructor() {
        this.username = "User1";
    }

    searchGist() {
        this.username = "Now I am searching";
    }
}
