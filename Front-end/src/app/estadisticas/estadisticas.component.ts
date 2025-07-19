import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})

export class EstadisticasComponent implements OnInit {
  media: string = "";
  desEst: string = "";

  ngOnInit() {
    this.media = "123"
    this.desEst = "321"
  } 

}
