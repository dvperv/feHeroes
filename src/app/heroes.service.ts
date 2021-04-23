import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHero(): Observable<Hero> {
    return this.http.get<Hero>(this.heroUrl);
  }
}
