import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const states = [
  {state:"W", condition:18.0, title:"Bajo de peso", interpretation:"Necesitas subir de peso"},
  {state:"G", condition:25.0, title:"Sano de peso", interpretation:"Estas saludable por continua igual"},
  {state:"D", condition:30.0, title:"Sobrepeso", interpretation:"Estas con sobre preso haz mas ejecicio"},
]

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  BMI:number | null
  state:string;
  title:string;
  interpretation:string;

  constructor(private route:ActivatedRoute){
    const bmi = parseFloat(this.route.snapshot.paramMap.get('value')!);
    this.BMI = bmi;

    if(bmi < states[0].condition){
      const {state, title, interpretation} = states[0];
      this.state = state;
      this.title = title;
      this.interpretation = interpretation;
    }else if (bmi < states[1].condition){
      const {state, title, interpretation} = states[1];
      this.state = state;
      this.title = title;
      this.interpretation = interpretation;
    }else{
      const {state, title, interpretation} = states[2];
      this.state = state;
      this.title = title;
      this.interpretation = interpretation;
    }
  }
}
