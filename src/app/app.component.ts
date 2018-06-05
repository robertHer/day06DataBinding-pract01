import { Component } from '@angular/core';

  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
   public heading = 'Person Details';
   public person:any = [{
     name: ["'first:string,'last:string'"],
     gender: ''
   }
   
  ];
  


   
   

  constructor(){

  }

  
}
