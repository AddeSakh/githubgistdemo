import { Component } from '@angular/core';
import { SearchService } from './search.service'

@Component({
    selector: 'gist-search',
    templateUrl: 'app/search/search.html',
    providers: [SearchService]

})

export class SearchComponent {
    private username: string;

    constructor(private searchService: SearchService) {
        this.username = this.searchService.getGists()[1].name;
    }
    
    searchGist(): void {
        this.username = this.searchService.getGists()[2].name;
    }
}
