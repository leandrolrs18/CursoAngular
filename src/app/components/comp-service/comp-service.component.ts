import { Component } from '@angular/core';
// importando os recursos necessários
import { ProductService } from '../../product.service';
import { Produto } from '../../product';
 
@Component({
  selector: 'app-comp-service',
  templateUrl: './comp-service.component.html',
  styleUrls: ['./comp-service.component.css']
})
export class CompServiceComponent {
 
  // casting das propriedades utilizadas dentro do código
  produto!:Produto[]
  
 
  constructor(private productService: ProductService) {
   // this.productService = new ProductService()
   
  }
  //fazer uso do objeto productService para acessar
  // o conteudo do service criado anteriormente
  obterConteudo(){
    this.produto = this.productService.getProdutos()
  }
 
 
}
