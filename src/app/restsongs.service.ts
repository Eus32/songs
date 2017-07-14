import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Song } from '../model/app.Song';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RESTSongsService {

  BASEURI: string ="http://sample-env.nvv3r7qh2h.eu-central-1.elasticbeanstalk.com";

  constructor(private http: Http) { }

  getSongs (): Observable<Song[]> {
    return this.http.get(`${this.BASEURI}/api/canciones`)
    .map(response => response.json() as Song[])
    .catch(this.serverError);
  }

  getSong (id: string ): Observable<Song> {
    return this.http.get(`${this.BASEURI}/api/canciones/${id}`)
    .map(response => response.json() as Song)
    .catch(this.serverError);
  }

  private serverError(err: any){
    return Observable.throw(err.json().error || 'Server error');
  }
}
