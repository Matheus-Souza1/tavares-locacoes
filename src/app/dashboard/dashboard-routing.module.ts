import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { AluguelComponent } from './aluguel/aluguel.component';
import { CriarClienteComponent } from './clientes/criar-cliente/criar-cliente.component';
import { CriarFerramentaComponent } from './ferramentas/criar-ferramenta/criar-ferramenta.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'ferramentas', component: FerramentasComponent },
      { path: 'criar-ferramenta', component: CriarFerramentaComponent },
      { path: 'alugueis', component: AluguelComponent },
      { path: 'criar-cliente', component: CriarClienteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
