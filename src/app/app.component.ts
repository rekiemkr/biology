import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leyes de mendel';
  public idojo:number;
  public idnariz:number;
  public idboca:number;
  public idojom:number;
  public idnarizm:number;
  public idbocam:number;
  public idojoh:number;
  public idnarizh:number;
  public idbocah:number;
  public carac1:number;
  public carac2:number;
  public carac3:number;

    constructor(){
      this.idojo = 1;
      this.idnariz = 1;
      this.idboca = 1;
      this.idojom = 4;
      this.idnarizm = 4;
      this.idbocam = 4;
      this.idojoh = 1;
      this.idnarizh = 1;
      this.idbocah = 1;
    }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.

   }
   cambiarOjosNext(){
      this.idojo = this.idojo + 1;
      if(this.idojo > 3){
        this.idojo = 1;
      }
   }
   cambiarOjosPrevius(){
      this.idojo = this.idojo - 1;
      if(this.idojo < 1){
        this.idojo = 3;
      }
  }  
  cambiarNarizNext(){
      this.idnariz = this.idnariz + 1;
      if(this.idnariz > 3){
          this.idnariz = 1;
      }
  }
  cambiarNarizPrevius(){
      this.idnariz = this.idnariz - 1;
      if(this.idnariz < 1){
        this.idnariz = 3;
    }
  }  
  cambiarBocaNext(){
      this.idboca = this.idboca + 1;
      if(this.idboca > 3){
        this.idboca = 1;
      }
  }
  cambiarBocaPrevius(){
      this.idboca = this.idboca - 1;
      if(this.idboca < 1){
        this.idboca = 3;
      }
  }  
  cambiarOjosNextM(){
    this.idojom = this.idojom + 1;
    if(this.idojom > 6){
      this.idojom = 4;
    }
 }
 cambiarOjosPreviusM(){
    this.idojom = this.idojom - 1;
    if(this.idojom < 4){
      this.idojom = 6;
    }
}  
cambiarNarizNextM(){
    this.idnarizm = this.idnarizm + 1;
    if(this.idnarizm > 6){
        this.idnarizm = 4;
    }
}
cambiarNarizPreviusM(){
    this.idnarizm = this.idnarizm - 1;
    if(this.idnarizm < 4){
      this.idnarizm = 6;
  }
}  
cambiarBocaNextM(){
    this.idbocam = this.idbocam + 1;
    if(this.idbocam > 6){
      this.idbocam = 4;
    }
}
cambiarBocaPreviusM(){
    this.idbocam = this.idbocam - 1;
    if(this.idbocam < 4){
      this.idbocam = 6;
    }
} 

    generarHijo(){
      let opc1:number;
      let opc2:number;
      let opc3:number;
      let azar:number;
      if(this.carac1 >0 && this.carac1 < 4){
        azar = Math.floor(Math.random() * 100) + 1;
        console.log(azar);
        opc1 = this.idojom;
        if(azar < 25){
            this.idojoh = opc1;
        }else{
            this.idojoh = this.carac1;
        }
      }else{
        azar = Math.floor(Math.random() * 100) + 1;
        console.log(azar);
        opc1 = this.idojo;
        if(azar < 25){
            this.idojoh = opc1;
        }else{
            this.idojoh = this.carac1;
        }
      } 
      if(this.carac2 >0 && this.carac2 < 4){
        azar = Math.floor(Math.random() * 100) + 1;
        console.log(azar);
        opc2 = this.idnarizm;
        if(azar < 25){
            this.idnarizh = opc2;
        }else{
            this.idnarizh = this.carac2;
        }
      }else{
        azar = Math.floor(Math.random() * 100) + 1;
        console.log(azar);
        opc2 = this.idnariz;
        if(azar < 25){
            this.idnarizh = opc2;
        }else{
            this.idnarizh = this.carac2;
        }
      } 
      if(this.carac3 >0 && this.carac3 < 4){
        azar = Math.floor(Math.random() * 100) + 1;
        console.log(azar);
        opc3 = this.idbocam;
        if(azar < 25){
            this.idbocah = opc3;
        }else{
            this.idbocah = this.carac3;
        }
      }else{
        azar = Math.floor(Math.random() * 100) + 1;
        console.log(azar);
        opc3 = this.idboca;
        if(azar < 25){
            this.idbocah = opc3;
        }else{
            this.idbocah = this.carac3;
        }
      }
    }

}
