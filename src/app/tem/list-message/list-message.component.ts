import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MessageserviceService } from '../messageservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-message.component.html',
  styles: ``
})
export class ListMessageComponent {
  constructor(public messageService: MessageserviceService){ }//Inyectar servicio en el componente
  

}
