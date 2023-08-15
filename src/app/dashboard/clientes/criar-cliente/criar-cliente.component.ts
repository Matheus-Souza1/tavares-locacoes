import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent {
  form: FormGroup;

  constructor(private clienteService: ClientesService,
              private fb:FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar){

    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }

  adicionarCliente(){
    const cliente: Cliente ={
      nome: this.form.value.nome,
      cpf: this.form.value.cpf,
      email: this.form.value.email,
      telefone: this.form.value.telefone,
      bairro: this.form.value.bairro,
      rua: this.form.value.rua,
      numero: this.form.value.numero,
      cidade: this.form.value.cidade,
      estado: this.form.value.estado,
      complemento: this.form.value.complemento,
    }

    this.clienteService.adicionarCliente(cliente);
    this.router.navigate(['/dashboard/clientes']);
    this._snackBar.open('Cliente criado com sucesso', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }
}
