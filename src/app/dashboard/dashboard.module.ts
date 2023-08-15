import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { AluguelComponent } from './aluguel/aluguel.component';
import { CriarClienteComponent } from './clientes/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { CriarFerramentaComponent } from './ferramentas/criar-ferramenta/criar-ferramenta.component';
import { EditarFerramentaComponent } from './ferramentas/editar-ferramenta/editar-ferramenta.component';
import { ContratoAluguelComponent } from './aluguel/contrato-aluguel/contrato-aluguel.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ClientesComponent,
    FerramentasComponent,
    AluguelComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    CriarFerramentaComponent,
    EditarFerramentaComponent,
    ContratoAluguelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
