import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent  {
  // VAMOS CRIAR OS ELEMENTOS PARA FAZER USO DA PROPRIEDADE@OUTPUT
  // filho que envia input para o pai
  // conjunto de dados do comp-filho para o comp-pai
  // aqui, vamos implementar nosso Event Emitter
  @Output() anunciador = new EventEmitter<any>();
  // criando a nossa variavel para nosso objeto literal
  public objDados: any = {}
  // vamos criar nosso emissor de eventos
  public enviarDados(): void{
  this.anunciador.emit(this.objDados);
  }


}
