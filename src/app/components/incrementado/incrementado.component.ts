import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementado',
  templateUrl: './incrementado.component.html',
  styles: [
  ]
})
export class IncrementadoComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  //@Input('valor') progreso: number = 50;
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';



  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();


  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      return this.progreso = 100, this.valorSalida.emit(100);
    }

    if (this.progreso <= 0 && valor < 0) {
      return this.progreso = 0, this.valorSalida.emit(0);
    }

    return this.progreso = this.progreso + valor, this.valorSalida.emit(this.progreso);
  }

  onChange(event: number) {
    if (event >= 100) {
      this.progreso = 100;
    } else if (event <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = event;
    }
    this.valorSalida.emit(this.progreso);
  }

}
