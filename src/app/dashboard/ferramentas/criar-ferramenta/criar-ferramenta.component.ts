import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ferramentas } from 'src/app/interfaces/ferramentas';
import { FerramentasService } from 'src/app/services/ferramentas.service';

@Component({
  selector: 'app-criar-ferramenta',
  templateUrl: './criar-ferramenta.component.html',
  styleUrls: ['./criar-ferramenta.component.css']
})
export class CriarFerramentaComponent {
  form: FormGroup;

  constructor(private ferramentaService: FerramentasService,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      codigo: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

  adicionarFerramenta() {
    const ferramenta: Ferramentas = {
      codigo: this.form.value.codigo,
      descricao: this.form.value.descricao,
      quantidade: this.form.value.quantidade,
      valorDiaria: this.form.value.valor,
    }

    this.ferramentaService.adicionarFerramenta(ferramenta);
    this.router.navigate(['/dashboard/ferramentas']);
    this._snackBar.open('Ferrametna criada com sucesso', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }
}
