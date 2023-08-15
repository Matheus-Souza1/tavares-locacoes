import { animate, state, style, transition, trigger } from '@angular/animations';
import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Aluguel } from 'src/app/interfaces/aluguel';
import { AluguelService } from 'src/app/services/aluguel.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import "jspdf-autotable";

@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AluguelComponent implements OnInit {

  listaAluguel: Aluguel[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('content') content !: ElementRef;

  dataSource !: MatTableDataSource<any>;
  columnsToDisplay = ['cliente', 'dataInicial', 'dataFinal', 'valorTotal', 'acoes'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Aluguel | null;


  constructor(private aluguelService: AluguelService) { }

  ngOnInit(): void {
    this.listarTodosAlugueis();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarTodosAlugueis() {
    this.listaAluguel = this.aluguelService.getAlugueis();
    this.dataSource = new MatTableDataSource(this.listaAluguel);
  }
  downloadPDF() {

    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 500;
      let fileHeight = 500;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'pt', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('contrato.pdf');
    });
  }
}


