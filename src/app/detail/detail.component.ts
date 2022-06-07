import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  articulos:any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
    .subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        console.log('problemas')
      }
    );

  }

}
