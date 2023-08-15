import { Injectable } from '@angular/core';
import { Ferramentas } from '../interfaces/ferramentas';

@Injectable({
  providedIn: 'root'
})
export class FerramentasService {


  listaFerramentas: Ferramentas[] = [
    { codigo: 1, descricao: 'Betoneira', quantidade: 10, valorDiaria: 100.00 },
    { codigo: 2, descricao: 'Andaime', quantidade: 1000, valorDiaria: 25.00 },
    { codigo: 3, descricao: 'Escora', quantidade: 1050, valorDiaria: 20.00 },
    { codigo: 4, descricao: 'Container', quantidade: 20, valorDiaria: 180.00 },
    { codigo: 5, descricao: 'Marreta', quantidade: 35, valorDiaria: 10.00 },
    { codigo: 6, descricao: 'Britadeira', quantidade: 22, valorDiaria: 50.00 },
    { codigo: 7, descricao: 'Armação', quantidade: 48, valorDiaria: 45.00 },
    { codigo: 8, descricao: 'Furadeira', quantidade: 12, valorDiaria: 22.00 },
    { codigo: 9, descricao: 'Pa', quantidade: 18, valorDiaria: 14.00 },
    { codigo: 10, descricao: 'Chaves', quantidade: 88, valorDiaria: 12.00 },
    { codigo: 11, descricao: 'Outro', quantidade: 110, valorDiaria: 28.00 },
  ];

  constructor() { }

  getFerramentas() {
    return this.listaFerramentas.slice();
  }

  deletarFerramenta(index: number) {
    this.listaFerramentas.splice(index, 1);
  }

  adicionarFerramenta(ferramenta: Ferramentas) {
    this.listaFerramentas.unshift(ferramenta);
  }

  editarFerramenta(id: number, ferramenta: Ferramentas) {

    const ferramentaEdit = this.listaFerramentas.map((item) =>
      item.codigo === id ? {
        ...item,
        descricao: ferramenta.descricao,
        quantidade: ferramenta.quantidade,
        valorDiaria: ferramenta.valorDiaria,
      } : item
    )
    this.listaFerramentas = ferramentaEdit;
    return this.listaFerramentas;
  }
}
