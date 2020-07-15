import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserModel } from '../models/user-entity.model';
import { NormalizedList } from '../../common/models/normalized';
import { normalize, schema } from 'normalizr';

@Injectable({ providedIn: 'root' })
export class UserService {
  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<any> {
    const myData = {
      Items: [
        { id: 11, name: 'Dr Nice' },
        { id: 21, name: 'Nice' },
      ],
      TotalCount: 10,
    };
    return of(myData);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
