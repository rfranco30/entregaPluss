import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheEntregaPage } from './detalhe-entrega.page';

describe('DetalheEntregaPage', () => {
  let component: DetalheEntregaPage;
  let fixture: ComponentFixture<DetalheEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheEntregaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
