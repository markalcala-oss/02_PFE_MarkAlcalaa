import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { VideojuegoService } from './videojuego.service';

describe('VideojuegoService', () => {
  let service: VideojuegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(VideojuegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});