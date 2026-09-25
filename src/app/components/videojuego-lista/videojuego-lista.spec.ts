import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideojuegoLista } from './videojuego-lista';

describe('VideojuegoLista', () => {
  let component: VideojuegoLista;
  let fixture: ComponentFixture<VideojuegoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideojuegoLista],
    }).compileComponents();

    fixture = TestBed.createComponent(VideojuegoLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
