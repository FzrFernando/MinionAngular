import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionService {

  minions: Minion[] = [];

  private url: string = 'http://localhost:3000/minions/';
  constructor(private http: HttpClient) { 
    
  }

  getMinions(): Observable<Minion[]> {
    // return this.http.get(this.url).subscribe({
    //   next: (resp) => console.log(resp)
    // })
    return this.http.get<Minion[]>(this.url)
  }

  getFilterMinions(term: string): Minion[]{
    return this.minions.filter(minion => minion.name.toLowerCase().includes(term.toLowerCase()));
  }
  
  getMinion(id : string): Observable<Minion>{
    return this.http.get<Minion>(`${this.url}${id}`);
  }
}
