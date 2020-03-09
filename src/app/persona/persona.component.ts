import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre: string = 'John';
  apellido: string = 'Doe';
  edad: number = 20;

  constructor() { }

}
