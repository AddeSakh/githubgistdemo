import {Component} from 'angular2/core';
import {CommitsComponent} from './commits.component'


@Component({
    selector: 'my-app',
    template: '<h1>Github Gist - Demo using Angular 2</h1><commits></commits>',
    directives: [CommitsComponent]
})
export class AppComponent { }