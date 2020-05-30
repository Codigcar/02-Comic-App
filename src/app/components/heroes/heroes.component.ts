import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.services';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  private heroes: IHeroe[] = [];

  constructor( private _heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
