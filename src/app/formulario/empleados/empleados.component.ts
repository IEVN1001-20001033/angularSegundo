import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Empleado{
  matricula: string;
  nombre: string;
  email: string;
  edad: number;
  horas: number;
  horasPagar?:number;
  horasExtras?:number;
  subtotal?:number;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './empleados.component.html',
})
export default class EmpleadosComponent implements OnInit {
  formGroup!: FormGroup;  
  verTabla: boolean = false; 
  modificar: boolean = true; 
  empleados: Empleado[] = [];  
  totalPagar:number = 0;
  buscarMatricula: string = '';
  matriculaModificar: string = '';

  empleado:Empleado={
    matricula:'',
    nombre:'',
    email:'',
    edad: 0,
    horas: 0
  };

  constructor(private readonly fb: FormBuilder){}

  ngOnInit():void{
    this.formGroup = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
    matricula:[''],
    nombre:[''],
    email:[''],
    edad:[''],
    horas:[''],
  })
  }

  onRegistrar():void{
    const {matricula, nombre, email, edad, horas} = this.formGroup.value;//Desestructuración de arreglos
    let empGuardado: Empleado[] = JSON.parse(localStorage.getItem("empleados") || '[]');

    const indice = empGuardado.findIndex((empleado) => empleado.matricula === this.matriculaModificar);

      if(indice !== -1){
        empGuardado[indice] = { matricula, nombre, email, edad, horas };
       
      }else{
        const nuevoEmpleado: Empleado = {matricula, nombre, email, edad, horas};
    
        empGuardado.push(nuevoEmpleado);
      }

   
    localStorage.setItem("empleados",JSON.stringify(empGuardado));

    this.empleados = empGuardado;
    this.verTabla = false;
    this.formGroup.reset();
  }

  Imprimir():void{
    const empleadoRecuperado = JSON.parse(localStorage.getItem("empleados") || '[]');
    this.empleados = empleadoRecuperado;

    
    this.totalPagar = 0;

    empleadoRecuperado.forEach((empleado: Empleado) => {
      let subtotal = 0;
      let horasExtras = 0;
      let horasPagar = 0;

      if(empleado.horas >= 40){
        horasPagar = 40 * 70;
        horasExtras = (empleado.horas - 40) * 140;
        subtotal = horasPagar + horasExtras;        
      }else if(empleado.horas < 40){
        horasPagar = empleado.horas * 70;
        horasExtras = 0;
        subtotal = horasPagar;
      }

      this.totalPagar += subtotal;

      empleado.horasPagar = horasPagar;
      empleado.horasExtras = horasExtras;
      empleado.subtotal = subtotal;
    });
    this.verTabla = true;
    
    }

    Modificar(matricula: string): void{
      let empGuardado: Empleado[] = JSON.parse(localStorage.getItem('empleados') || '[]');
      const empEncontrado = empGuardado.find((empleado) => empleado.matricula === matricula);

      if(empEncontrado){
        this.formGroup.setValue({
          matricula: empEncontrado.matricula,
          nombre: empEncontrado.nombre,
          email: empEncontrado.email,
          edad: empEncontrado.edad,
          horas: empEncontrado.horas,
        });

        this.matriculaModificar = matricula;
      }
    }

    Eliminar(): void {
     /* let empGuardado: Empleado[] = JSON.parse(localStorage.getItem('empleados') || '[]');
      empGuardado = empGuardado.filter((empleado) => empleado.matricula !== this.buscarMatricula);

      const  empActualizados = empGuardado.filter(empleado => empleado.matricula !== this.buscarMatricula);

      localStorage.setItem('empleados', JSON.stringify(empActualizados));
        
      this.empleados = empActualizados;

      this.verTabla = false;
      
      this.formGroup.reset();
      this.buscarMatricula= '';*/
      localStorage.removeItem('empleados');
    }

}
