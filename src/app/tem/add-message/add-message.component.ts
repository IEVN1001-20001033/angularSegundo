import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import{FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-message.component.html',
  styles: ``
})
export class AddMessageComponent {
  
  formGroup!: FormGroup;

  constructor(public messageService: MessageserviceService){ }//Inyectar servicio en el componente

  alumno:string = "";

  addAlumno(){
    this.messageService.add(this.alumno);
    this.alumno = ""
  }

}
