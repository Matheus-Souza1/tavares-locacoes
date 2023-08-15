import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _empService: ClientesService,
    private _dialogRef: MatDialogRef<EditarClienteComponent>,
    private _snackBar: MatSnackBar,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = this._fb.group({
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
    });
  }


  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onSubmit() {
    const cliente: Cliente = {
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
    };

    if (this.form.valid) {
      if (this.data) {
        this._empService
          .editarCliente(this.data.cpf, cliente);
        this._dialogRef.close(true);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['dashboard/clientes']);
        });
        this._snackBar.open('Cliente atualizado com sucesso', '', {
          duration: 1500,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        })
      }
    };
  }
}

