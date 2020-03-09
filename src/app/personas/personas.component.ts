import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  agregarPersona = false;

  constructor() {
    setTimeout(() => {
      this.agregarPersona = true;
    }, 2000);
  }
}
