import { Component, OnInit, OnChanges } from '@angular/core';
import { EntregaService } from '../shared/services/entrega.service';
import { Entrega } from '../shared/model/entrega';
import { EntregadorService } from '../shared/services/entregador.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.page.html',
  styleUrls: ['./entregas.page.scss'],
})
export class EntregasPage implements OnInit {

  private filtro: Entrega = new Entrega();
  private entrgas: Array<Entrega>;
  private entregadores;
  private datePipe = new DatePipe('en-US');
  constructor(private entregaServic: EntregaService, private entregadorService: EntregadorService) { }

  ngOnInit() {
    const dat = new Date();
    this.filtro.entregador = '0';

    this.filtro.data = this.datePipe.transform(dat);
    this.carregarEntregas();
    this.entregadorService.getAll().subscribe(
      data => {
        this.entregadores = [];
        data.map(item => {
          this.entregadores.push(item.payload.exportVal());
        });
      });
  }

  carregarEntregas() {
    this.filtro.dataSimples = this.datePipe.transform(this.filtro.data, 'dd/MM/yyyy');

    this.entregaServic.filter(this.filtro.dataSimples).subscribe(
      data => {
        this.entrgas = [];
        data.map(item => {
          const entrgas = JSON.stringify({ key: item.payload.key, ...item.payload.exportVal() });
          this.entrgas.push(JSON.parse(entrgas));
        });
        if (this.filtro.entregador !== '0') {
          this.entrgas = this.entrgas.filter(fil => fil.entregador === this.filtro.entregador);
        }
        if (this.filtro.entregue) {
          this.entrgas = this.entrgas.filter(fil => fil.entregue === this.filtro.entregue);
        }
        if (this.filtro.logradouro) {
          this.entrgas = this.entrgas.filter(fil => fil.logradouro === this.filtro.logradouro);
        }
        if (this.filtro.produto) {
          this.entrgas = this.entrgas.filter(fil => fil.produto === this.filtro.produto);
        }
        if (this.filtro.hora) {
          this.entrgas = this.entrgas.filter(fil => fil.hora === this.datePipe.transform(this.filtro.hora, 'HH'));
        }



      });
  }


  alterEntregador(entrega: Entrega) {
    this.entregaServic.save(entrega);
  }



}
