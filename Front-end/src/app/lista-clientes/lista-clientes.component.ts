import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

interface Client {
  id: number,
  nombre: string,
  apellido: string,
  edad: number,
  fechaAproxMuerte: string,
  fechaNacimiento: string
}


@Component({
  selector: 'app-lista-clientes',
  imports: [CommonModule],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements OnInit{
  list: Client[] = [];

  ngOnInit(): void {
    axios.get('http://localhost:5000/list-clientes')
    .then((result) => {
      console.log(result.data);
      this.list = result.data;
    })
    .catch((err) => {
      console.log('Ha occurrido un error');
    })
  }

}
