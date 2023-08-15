import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ferramentas } from 'src/app/interfaces/ferramentas';
import { FerramentasService } from 'src/app/services/ferramentas.service';

@Component({
  selector: 'app-editar-ferramenta',
  templateUrl: './editar-ferramenta.component.html',
  styleUrls: ['./editar-ferramenta.component.css']
})
export class EditarFerramentaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _empService: FerramentasService,
    private _dialogRef: MatDialogRef<EditarFerramentaComponent>,
    private _snackBar: MatSnackBar,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = this._fb.group({
      codigo: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      valorDiaria: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    this.form.patchValue(this.data);
    console.log(this.data)
  }

  onSubmit() {
    console.log(this.form);
    const ferramenta: Ferramentas = {
      codigo: this.form.value.codigo,
      descricao: this.form.value.descricao,
      quantidade: this.form.value.quantidade,
      valorDiaria: this.form.value.valorDiaria,
    };

    if (this.form.valid) {
      if (this.data) {
        this._empService
          .editarFerramenta(this.data.codigo, ferramenta);
        this._dialogRef.close(true);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['dashboard/ferramentas']);
        });
        this._snackBar.open('Ferramenta atualizada com sucesso', '', {
          duration: 1500,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        })
      }
    };
  }
}
