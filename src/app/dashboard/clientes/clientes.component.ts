import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClientesService } from 'src/app/services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],

})
export class ClientesComponent implements OnInit {

  listaCliente: Cliente[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['nome', 'email', 'cpf', 'telefone', 'bairro', 'rua','numero','cidade','estado','complemento','acoes'];
  dataSource !: MatTableDataSource<any>;

  constructor(private clienteService: ClientesService, private _snackBar: MatSnackBar, private _dialog: MatDialog, private router: Router,) { }

  ngOnInit(): void {
    this.listarTodosCliente();
  }

  listarTodosCliente() {
    this.listaCliente = this.clienteService.getClientes();
    this.dataSource = new MatTableDataSource(this.listaCliente);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletarUsuario(index: number) {
    this.clienteService.deletarCliente(index);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/clientes']);
    });

    this._snackBar.open('Cliente deletado com sucesso', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  };


  editarUsuario(data: any) {
    const dialogRef = this._dialog.open(EditarClienteComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.listarTodosCliente();
        }
      },
    });
  };
}


