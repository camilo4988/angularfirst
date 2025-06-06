import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponenteUnoComponent} from './components/componente-uno/componente-uno.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ComponenteUnoComponent,FormsModule],
  //template:'<h1>hola inmundo</h1>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pry_test';
  //creo variable
  username: string='Camilo';
  number: number=0;

  condicion1:boolean=false;

  addOne(){
    this.number += 1;
  }
}
