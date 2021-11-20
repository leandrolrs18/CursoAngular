import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent  {
// aqui vamos implementar o conj de propried/variav para vincular com view

public x: number = 10
public umArray: Array<number> = [10, 26, 89]
public dataHoje: Date = new Date ()
public statusBooleano: boolean = true 

public exibirTexto(): string {
  return 'Texto retornado a partir da função'
}
}
