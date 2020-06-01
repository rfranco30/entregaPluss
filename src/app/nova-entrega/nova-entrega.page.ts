import { Component, OnInit } from '@angular/core';
import { Entrega } from '../shared/model/entrega';
import { DatePipe } from '@angular/common';
import { EntregaService } from '../shared/services/entrega.service';

@Component({
  selector: 'app-nova-entrega',
  templateUrl: './nova-entrega.page.html',
  styleUrls: ['./nova-entrega.page.scss'],
})
export class NovaEntregaPage implements OnInit {

  private entrega: Entrega = new Entrega();
  constructor(private entregaService: EntregaService) { }

  ngOnInit() {
  }

  public onSubmit() {
    const datePipe = new DatePipe('en-US');
    this.entrega.dataSimples = datePipe.transform(this.entrega.data, 'dd/MM/yyyy');
    this.entrega.dia = datePipe.transform(this.entrega.data, 'dd');
    this.entrega.mes = datePipe.transform(this.entrega.data, 'MM');
    this.entrega.ano = datePipe.transform(this.entrega.data, 'yyyy');
    this.entrega.hora = datePipe.transform(this.entrega.data, 'HH');
    this.entrega.minuto = datePipe.transform(this.entrega.data, 'mm');
    this.entregaService.save(this.entrega).then(rtu => console.log(rtu));
  }

}
