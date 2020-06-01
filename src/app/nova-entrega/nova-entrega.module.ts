import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaEntregaPageRoutingModule } from './nova-entrega-routing.module';

import { NovaEntregaPage } from './nova-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaEntregaPageRoutingModule
  ],
  declarations: [NovaEntregaPage]
})
export class NovaEntregaPageModule {}
