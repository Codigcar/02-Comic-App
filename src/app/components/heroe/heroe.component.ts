import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

 
  constructor(private activatedRouter: ActivatedRoute,
              private _heroesService: HeroesService ) {

    this.activatedRouter.params.subscribe( params => {
      console.log( params['id'] );  // Obtener parametro ( el id en este caso )
      this.heroe = this._heroesService.getHeroeById( params['id'] );
      })
   }

  ngOnInit(): void {
  }

}
