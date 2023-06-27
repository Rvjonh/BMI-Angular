import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  genre:string = 'M';
  peso:number = 60;
  edad:number = 27;
  altura:number = 170;

  constructor(private router: Router){}

  setGenre(genre: string){
    /* Sets genre when clicks on genre button */
    this.genre = genre;
  }

  changePeso(move:number){
    this.peso += move;
  }

  changeEdad(move:number){
    this.edad += move;
  }

  changeAltura($event: Event){
    const targetElement = (<HTMLInputElement>$event.target)
    const newAltura = parseInt(targetElement.value);
    if(newAltura){
      this.altura = newAltura;
    }
  }

  calculateWeight(){
    /* Calculates BMI and sends it to resultado */
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }
}
