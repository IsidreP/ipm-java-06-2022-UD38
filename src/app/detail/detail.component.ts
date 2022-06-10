import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ArticulosService } from '../articulos.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  articulos:any = null;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService.retornar()
    .subscribe( result => this.articulos = result)
  }

}
