import { Injectable } from '@angular/core'
import { Gist } from './gist.mock';
import { IGist } from '../gist/gist'



@Injectable()
export class SearchService {

  getGists(): IGist[] {
      return Gist;
  } 
}