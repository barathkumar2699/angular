import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';

import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable()
export class LeaderService {

  constructor(private http:HttpClient) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + "leadership/" + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + "leadership?featured=true").pipe(map(leaders=>leaders[0]));
  }
}