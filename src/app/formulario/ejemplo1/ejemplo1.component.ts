import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

interface Usuario{
  nombre: string;
  email: string;
  edad: number;
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ejemplo1.component.html',
  styles: ``
})
export default class Ejemplo1Component implements OnInit{
  formGroup!: FormGroup;
  nombre:string="lna"


  persona:Usuario={
    nombre:'lna',
    edad: 23,
    email:'lnarodher.03@gmail.com'
  }

  constructor(private readonly fb: FormBuilder){}

  ngOnInit():void{
    this.formGroup = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
    nombre:[''],
    email:[''],
    edad:[''],
  })
  }

  onSubmit():void{
    const {nombre, edad, email} = this.formGroup.value;//Desestructuración de arreglos
    this.persona.nombre=nombre
    this.persona.edad=edad
    this.persona.email=email
    //localStorage.setItem("nombre",this.nombre);

    let personaJSON = JSON.stringify(this.persona);
    
    localStorage.setItem("persona",personaJSON);
   

    //console.log('Form ->',this.formGroup.value);
  }

  subImprime():void{
    const usuarioGuardado = localStorage.getItem('persona');
    if (usuarioGuardado) {
      const usuarioRecuperado: Usuario = JSON.parse(usuarioGuardado);

      this.persona=usuarioRecuperado;
    }
  }

}
