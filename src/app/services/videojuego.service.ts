import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  // URL de prueba pública lista para usar en CRUD:
  private apiUrl = 'https://6ab683a0c4c7bb67b918e8e5.mockapi.io/videojuegos';

  constructor(private http: HttpClient) { }

  // GET - Listar
  getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.apiUrl);
  }

  // POST - Registrar
  crearVideojuego(juego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(this.apiUrl, juego);
  }

  // PUT - Actualizar
  actualizarVideojuego(id: string, juego: Videojuego): Observable<Videojuego> {
    return this.http.put<Videojuego>(`${this.apiUrl}/${id}`, juego);
  }

  // DELETE - Eliminar
  eliminarVideojuego(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}