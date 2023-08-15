import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FerramentasService } from 'src/app/services/ferramentas.service';
import { Ferramentas } from 'src/app/interfaces/ferramentas';
import { EditarFerramentaComponent } from './editar-ferramenta/editar-ferramenta.component';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {


  listaFerramentas: Ferramentas[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['codigo', 'descricao', 'quantidade', 'valor', 'acoes'];
  dataSource !: MatTableDataSource<any>;

  constructor(private ferramentaService: FerramentasService, private _snackBar: MatSnackBar, private _dialog: MatDialog, private router: Router,) { }



  ngOnInit(): void {
    this.listarTodasFerramentas();
  }

  listarTodasFerramentas() {
    this.listaFerramentas = this.ferramentaService.getFerramentas();
    this.dataSource = new MatTableDataSource(this.listaFerramentas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletarFerramenta(index: number) {
    this.ferramentaService.deletarFerramenta(index);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/ferramentas']);
    });

    this._snackBar.open('Ferramentada deletada com sucesso', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  };


  editarFerramenta(data: any) {
    const dialogRef = this._dialog.open(EditarFerramentaComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.listarTodasFerramentas();
        }
      },
    });
  };
}
