import {Injectable} from 'angular2/core'
import {ICommit} from './commits'

@Injectable()
export class CommitService{
    getCommits() : ICommit[]{
        return [
            {
                "commitMessage" : "Commit Message 1",
                "authour" : ""
            },
            {
                "commitMessage" : "Commit Message 2",
                "authour" : ""
            }
        ]
    }
}