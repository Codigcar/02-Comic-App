import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHereo( id: number){
    this.router.navigate( ['/heroe',id ] )
  }
}
