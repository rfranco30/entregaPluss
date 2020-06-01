import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheEntregaPage } from './detalhe-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheEntregaPageRoutingModule {}
