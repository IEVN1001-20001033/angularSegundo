import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import EmpleadosComponent from "./formulario/empleados/empleados.component";
import { TemapComponent } from "./tem/temap/temap.component";
import { AddMessageComponent } from "./tem/add-message/add-message.component";
//import ResistenciasComponent from "./formulario/resistencias/resistencias.component";
//import  Ejemplo1Component  from "./formulario/ejemplo1/ejemplo1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemapComponent, AddMessageComponent],//, Ejemplo1Component, ResistenciasComponent, EmpleadosComponent, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}
