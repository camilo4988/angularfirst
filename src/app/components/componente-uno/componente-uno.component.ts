import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  imports: [],
  templateUrl: './componente-uno.component.html',
  styleUrl: './componente-uno.component.css'
})
export class ComponenteUnoComponent {
nombreusuario:string='Canuki';
condicion: string=this.nombreusuario;
}
