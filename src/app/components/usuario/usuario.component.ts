import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.route.params
      /*.pipe(map(params => params['id']), tap(id => (this.id = +id)))*/
      .subscribe(params => {
        console.log('Ruta: UsuarioComponent');
        console.log(params);
      });
  }

  ngOnInit(): void {
  }

}
