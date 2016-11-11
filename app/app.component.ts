import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <gist-search></gist-search>`
})
export class AppComponent { }
