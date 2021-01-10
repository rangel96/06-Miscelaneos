import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.route.params
      /*.pipe(map(params => params['id']), tap(id => (this.id = +id)))*/
      .subscribe(params => {
        console.log('Ruta: UsuarioNuevoComponent');
        console.log(params);
      });
  }

  ngOnInit(): void {
    this.route.parent.params
      /*.pipe(map(params => params['id']), tap(id => (this.id = +id)))*/
      .subscribe(params => {
        console.log('Ruta: UsuarioNuevoComponent');
        console.log(params);
      });
  }

}
