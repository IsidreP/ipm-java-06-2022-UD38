import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';
import { Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: any;
  resultado:any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(`https://rickandmortyapi.com/api/character/${this.id}`)
      .subscribe(
        (result) => {
          this.resultado = result;
          console.log(this.resultado);
        },
        (error) => {
          console.log('Error al obtener la información');
        }
      );
  }

}

