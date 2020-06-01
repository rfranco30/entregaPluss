import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EntregadorService {
  private PATH = 'entregadores/';
  constructor(private db: AngularFireDatabase) { }

  getAll() {

    return this.db.list(this.PATH)
      .snapshotChanges();
  }
}
