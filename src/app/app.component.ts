import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponenteUnoComponent} from './components/componente-uno/componente-uno.component';
import { FormsModule } from '@angular/forms';
import { IfCompComponent } from "./components/if-comp/if-comp.component";
import { ForCompComponent } from './components/for-comp/for-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteUnoComponent, FormsModule, IfCompComponent,ForCompComponent],
  //template:'<h1>hola inmundo</h1>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pry_test';
  //creo variable
  username: string='';
  number: number=0;

  condicion1:boolean=false;
  tamanoUn: string=this.username;

  addOne(){
    this.number += 1;
  }
}
