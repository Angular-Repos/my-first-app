import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  agregarPersona = false;
  agregarPersonaStatus = 'No se ha agregado ninguna persona';
  tituloPersona = 'titulo';

  constructor() {
    setTimeout(() => {
      this.agregarPersona = true;
    }, 2000);
  }

  onCrearPersona() {
    this.agregarPersonaStatus = 'Persona agregada';
  }

  onModificarPersona(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.tituloPersona = value;
  }
}
