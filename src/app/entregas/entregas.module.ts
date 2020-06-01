import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregasPageRoutingModule } from './entregas-routing.module';

import { EntregasPage } from './entregas.page';
import { EntregaService } from '../shared/services/entrega.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregasPageRoutingModule,
  ],
  providers:[EntregaService],
  declarations: [EntregasPage]
})
export class EntregasPageModule {}
