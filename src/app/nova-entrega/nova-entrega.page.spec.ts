import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaEntregaPage } from './nova-entrega.page';

describe('NovaEntregaPage', () => {
  let component: NovaEntregaPage;
  let fixture: ComponentFixture<NovaEntregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaEntregaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
