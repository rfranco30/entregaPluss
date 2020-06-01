import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaEntregaPage } from './nova-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: NovaEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaEntregaPageRoutingModule {}
