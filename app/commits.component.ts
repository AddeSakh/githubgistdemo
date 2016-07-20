import {Component} from 'angular2/core'
import {ICommit} from './commits/commits'
import {CommitService} from './commits/commit.Service'

@Component({
    selector: 'commits',
    template: `
    <h2>Commits</h2>
    <ui>
        <li *ngFor="#commit of commits">
           {{commit.commitMessage}}
        </li>
    </ui>`,
    providers: [CommitService]
})

export class CommitsComponent {

    constructor( private _commitService : CommitService) {    
    }
    commits : ICommit[]

    ngOnInit(){
        this.commits = this._commitService.getCommits();
    }

 
} 