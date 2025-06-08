import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-comp',
  imports: [FormsModule],
  templateUrl: './if-comp.component.html',
  styleUrl: './if-comp.component.css'
})
export class IfCompComponent {
   //creo variable
  username: string='';
  number: number=0;

  condicion1:boolean=false;
  tamanoUn: string=this.username;

  addOne(){
    this.number += 1;
  }

}
