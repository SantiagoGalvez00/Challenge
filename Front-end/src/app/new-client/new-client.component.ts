import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import dayjs from 'dayjs';

@Component({
  selector: 'app-new-client',
  imports: [ReactiveFormsModule],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.css'
})
export class NewClientComponent {

  newClient: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.newClient = this.formBuilder.group({
      nombre: '',
      apellido: '',
      edad: 0,
      fechaNacimiento: dayjs().format('YYYY-MM-DD')
    })
  }

  onSubmit() {
    console.log(this.newClient.value);
  }

}
