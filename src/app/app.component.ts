import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leyes de mendel';
  idojo:number;
  idnariz:number;
  idboca:number;

    constructor(){
      this.idojo = 1;
      this.idnariz = 1;
      this.idboca = 1;
    }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     console.log(this.idojo)
   }
   cambiarOjosNext(){
      this.idojo = this.idojo + 1;
      if(this.idojo > 3){
        this.idojo = 3;
      }
   }
   cambiarOjosPrevius(){
      this.idojo = this.idojo - 1;
      if(this.idojo < 1){
        this.idojo = 1;
      }
  }  
  cambiarNarizNext(){
      this.idnariz = this.idnariz + 1;
      if(this.idnariz > 3){
          this.idnariz = 3;
      }
  }
  cambiarNarizPrevius(){
      this.idnariz = this.idnariz - 1;
      if(this.idnariz < 1){
        this.idnariz = 1;
    }
  }  
  cambiarBocaNext(){
      this.idboca = this.idboca + 1;
      if(this.idboca > 3){
        this.idboca = 3;
      }
  }
  cambiarBocaPrevius(){
      this.idboca = this.idboca - 1;
      if(this.idboca < 1){
        this.idboca = 1;
      }
  }  
 
}
