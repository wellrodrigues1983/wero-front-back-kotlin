import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gerenciar-usuarios',
  templateUrl: './gerenciar-usuarios.component.html',
  styleUrls: ['./gerenciar-usuarios.component.scss']
})
export class GerenciarUsuariosComponent {

  screen = true
  element: any

  onScreen(event: any): void {

    if (event == true) {
      this.screen = true;
    } else {
      this.screen = false;
      this.element = event
    }

  }

}
