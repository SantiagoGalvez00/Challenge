import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import dayjs from 'dayjs';
import axios from 'axios';

@Component({
  selector: 'app-new-client',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.css'
})
export class NewClientComponent {

  newClient: FormGroup;
  toDay: string = dayjs().format('YYYY-MM-DD');
  showMessage: boolean = false;
  notValid: boolean = false;
  message: string = ""

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.newClient = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: [18, Validators.required],
      fechaNacimiento: [dayjs().format('YYYY-MM-DD'), Validators.required]
    })
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    this.showMessage = false;
    if (this.newClient.valid){
      await axios.post('http://localhost:5000/crear-cliente', this.newClient.value)
      this.message = "Cliente Guardado correctamente"
      this.showMessage = true;
      this.notValid = false;
      this.newClient.reset({
        nombre: '',
        apellido: '',
        edad: 18,
        fechaNacimiento: dayjs().format('YYYY-MM-DD')
      })
    } else {
      this.message = "!Faltan datos requeridos. Revise el formulario antes de continuar¡"
      this.showMessage = true;
      this.notValid = true;
    }

    setInterval(
      () => {this.showMessage = false},
      10000
    )
  }

}
