import { Routes } from '@angular/router';
import { NewClientComponent } from './new-client/new-client.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

export const routes: Routes = [
    { path: '', component: NewClientComponent},
    { path: 'estadisticas', component: EstadisticasComponent},
    { path: 'lista', component: ListaClientesComponent}
];
