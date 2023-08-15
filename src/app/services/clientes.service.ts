import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  listaClientes: Cliente[] = [
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '111111', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '22222', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '33333', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '15455', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '154185485', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '85478', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '418545', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '342342', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '5435345', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '543534', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },
    { nome: 'Cupu', email: 'cupu@email.com', cpf: '534534', telefone: '63 9999-9999', bairro: 'eldorado', rua: 'rio branco', numero: '00', cidade: 'araguaina', estado: 'Tocantins', complemento: 'Qd D Lt 16' },

  ];

  constructor() { }

  getClientes() {
    return this.listaClientes.slice();
  }

  deletarCliente(index: number) {
    this.listaClientes.splice(index, 1);
  }

  adicionarCliente(cliente: Cliente) {
    this.listaClientes.unshift(cliente);
  }

  editarCliente(id: string, cliente: Cliente) {

    const teste = this.listaClientes.map((item) =>
      item.cpf === id ? {
        ...item,
        nome: cliente.nome,
        email: cliente.email,
        cpf: cliente.cpf,
        telefone: cliente.telefone,
        bairro: cliente.bairro,
        rua: cliente.rua,
        cidade: cliente.cidade,
        numero: cliente.numero,
        estado: cliente.estado,
        complemento: cliente.complemento
      } : item
    )
    this.listaClientes = teste;
    return this.listaClientes;
  }

}
