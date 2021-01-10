import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>ngStyle <small>Cambiar el estilo</small></h2>
    <app-ng-style></app-ng-style>

    <br><br>

    <h2>CSS <small>Cambiar el CSS solo de la clase</small></h2>
    <app-css></app-css>

    <h2>ngClass <small>Cambiar o implementar clases</small></h2>
    <app-class></app-class>

    <br><br>

    <h2>Directives <small>Implementar directivas personalizadas</small></h2>
    <p [appResaltado]="'orange'">
      Hola appResaltado
    </p>

    <h2>ngSwitch <small>Evalua una condición para evaluarla con otras</small></h2>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
