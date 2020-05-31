import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

// Input: Recibir información de un componente padre a un hijo
// Output: Emite un evento del hijo hacia el padre, el padre escuchará dicho evento

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

  @Output() heroeSeleccionado: EventEmitter<number>; // Declarando nombre de evento y lo que el padre escuchará

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHereo(){
     /*  console.log("indice: " + this.Inputindice);
      this.router.navigate( ['/heroe',this.Inputindice ] ); */
      this.heroeSeleccionado.emit( this.Inputindice ); // emitiendo el indice recibido
  }

}