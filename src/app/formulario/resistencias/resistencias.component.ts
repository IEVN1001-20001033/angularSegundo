import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Resistencia{
  color1: string;
  color2: string;
  color3: string;
  tolerancia: string;  
  valor?: number;
  valorMax?:number;
  valorMin?:number;
}

@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resistencias.component.html',
})
export default class ResistenciasComponent implements OnInit {   
  formGroup!: FormGroup;
  verResistencia: boolean = false;  
  resistencias: Resistencia[] = [];

  valsC1_C2: { [key:string]: number } = {
    'Negro': 0,
    'Café': 1,
    'Rojo': 2,
    'Naranja': 3,
    'Amarillo': 4,
    'Verde': 5,
    'Azul': 6,
    'Violeta': 7,
    'Gris': 8,
    'Blanco': 9,
  }

  valsC3: { [key:string]: number } = {
    'Negro': 1,
    'Café': 10,
    'Rojo': 100,
    'Naranja': 1000,
    'Amarillo': 10000,
    'Verde': 100000,
    'Azul': 1000000,
    'Violeta': 10000000,
    'Gris': 100000000,
    'Blanco': 1000000000,
  }

  /*resistencia:Resistencia={
    color1:'',
    color2:'',
    color3:'',
    tolerancia:'',
  }*/
  
  constructor(private readonly fb: FormBuilder){}
  ngOnInit():void{
    this.formGroup = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
      color1:['Negro'],
      color2:['Negro'],
      color3:['Negro'],
      tolerancia:['Oro'],
    
  });
  }

  Registrar():void{
    const{ color1, color2, color3, tolerancia} = this.formGroup.value;
    /*this.resistencia.color1=color1;
    this.resistencia.color2=color2;
    this.resistencia.color3=color3;
    this.resistencia.tolerancia=tolerancia;*/

    
    const nRes: Resistencia = { color1, color2, color3, tolerancia };

    //et resistenciaJSON = JSON.stringify(this.resistencia);    
    //localStorage.setItem("resistencia", resistenciaJSON);
    let resGuardadas: Resistencia[] = JSON.parse(localStorage.getItem("resistencias") || '[]');

    resGuardadas.push(nRes);
    localStorage.setItem("resistencias", JSON.stringify(resGuardadas));

    this.resistencias = resGuardadas;

    this.verResistencia = false;
  }

  Imprimir():void{
   /* const resistenciaGuardada = localStorage.getItem('resistencia');
    if(resistenciaGuardada){
      const resistenciaRecuperada: Resistencia = JSON.parse(resistenciaGuardada);

      this.resistencia=resistenciaRecuperada;
      this.verResistencia = true;
    }*/
    
      const resistenciaRecuperada = JSON.parse(localStorage.getItem("resistencias") || '[]');
      
      this.resistencias=resistenciaRecuperada;


      resistenciaRecuperada.forEach((resistencia: Resistencia) => {
        const valC1 = this.valsC1_C2[resistencia.color1];
        const valC2 = this.valsC1_C2[resistencia.color2];
        const valC3 = this.valsC3[resistencia.color3];
    
        const valor = (valC1 * 10 + valC2) * valC3;
    
        let tolerVal = 0;
        if (resistencia.tolerancia === 'Oro') {
          tolerVal = 0.05;
        } else if (resistencia.tolerancia === 'Plata') {
          tolerVal = 0.10;
        }
    
        const valorMin = valor - (valor * tolerVal);
        const valorMax = valor + (valor * tolerVal);

        resistencia.valor = valor;
        resistencia.valorMax = valorMax;
        resistencia.valorMin = valorMin;
      });

      
      this.verResistencia = true;


  }

  colorFondo(color: string): string {
    switch (color.toLowerCase()) {
      case 'negro':
        return 'black';
      case 'café':
        return '#6F4E37'; 
      case 'rojo':
        return 'red';
      case 'naranja':
        return 'orange';
      case 'amarillo':
        return 'yellow';
      case 'verde':
        return 'green';
      case 'azul':
        return 'blue';
      case 'violeta':
        return '	#78288C';
      case 'gris':
        return 'gray';
      case 'blanco':
        return 'white';
      case 'oro':
          return '#EFB810';
      case 'plata':
          return '#E3E4E5';
      default:
        return ''; 
    }
  }
}
