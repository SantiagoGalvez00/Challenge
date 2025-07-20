import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface Estadisicas {
  media: string,
  desviacionEstandar: string
}

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})

export class EstadisticasComponent implements OnInit {
  data: Estadisicas = {media: '',  desviacionEstandar: ''}

  ngOnInit() {
    axios.get('http://localhost:5000/kpi-clientes')
    .then((result) => {
      this.data = result.data
    })
    .catch((err) => {
      console.log(err);     
    })
  } 

}
