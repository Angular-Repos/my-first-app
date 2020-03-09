import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre = 'John';
  apellido = 'Doe';
  edad = 20;

  constructor() { }

}
