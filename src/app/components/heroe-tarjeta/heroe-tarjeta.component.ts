// Input: especifica que una propiedad será recibida desde fuera
import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  // Este decorador indica que este heroe viene desde fuera
  @Input() Inputheroe: any = {}; 
  @Input() Inputindice: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHereo(){
      console.log("indice: " + this.Inputindice);
      this.router.navigate( ['/heroe',this.Inputindice ] );
      
  }

}
