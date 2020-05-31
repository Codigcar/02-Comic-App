import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // para obtener el parametro
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  // Variables
  heroes: any[] = [];
  termino: string;

  constructor( private activatedRouter: ActivatedRoute,
               private _hereoService: HeroesService) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( params => {
      //console.log( params['termino'] ); Obtiene la palabra buscada enviada por parametro
      
      this.termino = params['termino'];
      this.heroes = this._hereoService.getHeroeByName( params['termino']);
      console.log(this.heroes);
      
    })
  }

}
