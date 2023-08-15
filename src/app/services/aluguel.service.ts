import { Injectable } from '@angular/core';
import { Aluguel } from '../interfaces/aluguel';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {

  listaAluguel: Aluguel[] = [
    {
      cliente: 'cupu',
      dataInicial:'00/00/0000',
      dataFinal:'11/11/1111',
      bairro:'Eldorado'
      ,rua:'caramuru',
      complemento:'qd d lt 16',
      cidade:'Araguaina',
      estado:'TO',
      numero:0,
      ferramentas:{
        descricao:'Betoneira',
        quantidade:2,
        valorDiaria: 100},
      valorTotal:10000
    },

  ];

  constructor() { }

  getAlugueis() {
    return this.listaAluguel.slice();
  }
}
