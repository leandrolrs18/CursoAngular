import { Component} from '@angular/core';

@Component({
  selector: 'app-mega-salto',
  templateUrl: './mega-salto.component.html',
  styleUrls: ['./mega-salto.component.css']
})
export class MegaSaltoComponent {
// criar a função de exibição dos dados no component-PAI
  public exibirDados(dados:any){
    let receptora: string = 'Obrigado por se cadastrar '+ dados.nome + '.'
    + '\n';
    receptora += 'o email ' + dados.email + 'foi cadastrado com sucesso!'
    alert(receptora)
  }


}
// aqui vamos criar as prop. cujo os valores serão enviados para secundario.components.tc
//public texto: string = 'texto da janela alert'
//public outroTexto: string = 'texto enviado do componente Pai para o secundario (filho)'