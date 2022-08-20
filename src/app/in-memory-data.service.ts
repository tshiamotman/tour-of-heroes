import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes: Hero[] = [
      {id: 12, name: 'Dr. Nice', power: "Really Smart"},
      {id: 13, name: 'Bombasto', power: "Super Hot"},
      {id: 14, name: 'Celeritas', power: "Super Flexible"},
      {id: 15, name: 'Magnaea', power: "Weather Changer"},
      {id: 16, name: 'RubberMan', power: "Super Flexible"},
      {id: 17, name: 'Dynama', power: "Really Smart"},
      {id: 18, name: 'Dr. IQ', power: "Really Smart"},
      {id: 19, name: 'Magma', power: "Super Hot"},
      {id: 20, name: 'Tornado', power: "Weather Changers"},
  ];
  return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
