import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheEntregaPageRoutingModule } from './detalhe-entrega-routing.module';

import { DetalheEntregaPage } from './detalhe-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheEntregaPageRoutingModule
  ],
  declarations: [DetalheEntregaPage]
})
export class DetalheEntregaPageModule {}
