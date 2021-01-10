import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  alert = ['primary', 'secondary', 'success', 'warning', 'danger', null];
  nInterval;
  size: number;
  style: string;

  constructor() {
    this.size = 0;
    this.style = this.alert[this.size];
  }

  ngOnInit(): void {
  }

// Funcional
  changeStyle(position: number): void {
    this.size = this.size + position;

    if (this.size >= this.alert.length) {
      this.size = 0;
      this.style = this.alert[this.size];
    }

    if (this.size < 0) {
      this.size = 5;
      this.style = this.alert[this.size];
    }

    this.style = this.alert[this.size];
  }

  /*------------------Ejemplo---------------------*/
  /*----------Alternando dos colores ------------*/
  nIntervId;

  cambiaDeColor(): void {
    this.nIntervId = setInterval(this.flasheaTexto, 1000);
  }

  flasheaTexto(): void {
    const oElem = document.getElementById('mi_mensaje');
    oElem.style.color = oElem.style.color === 'red' ? 'blue' : 'red';
    // oElem.style.color ... es un operador ternario o condicional
  }

  detenerCambioDeColor(): void {
    clearInterval(this.nIntervId);
  }

}
