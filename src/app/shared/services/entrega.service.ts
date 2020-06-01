import { Injectable, Query } from '@angular/core';
import { Entrega } from '../model/entrega';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {
  entregaListRef: AngularFireList<any>;
  entregaRef: AngularFireObject<any>;
  private PATH = 'entregas/';
  constructor(private db: AngularFireDatabase) { }

  getAll() {

    return this.db.list(this.PATH)
      .snapshotChanges();
  }

  save(evento: Entrega) {
    return new Promise((resolve, reject) => {
      if (evento.key) {
        this.db.list(this.PATH)
          .update(evento.key, evento)
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push(evento)
          .then(obj => {
            resolve(obj.key);
          });
      }
    });
  }

  get(id: string) {
    this.entregaRef = this.db.object(this.PATH + id);
    return this.entregaRef;
  }

  filter(dt: string) {
    return this.db.list(this.PATH, ref => ref.orderByChild('dataSimples').startAt(dt))
      .snapshotChanges();
  }
}
