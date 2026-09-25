import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Videojuego } from '../../models/videojuego';
import { VideojuegoService } from '../../services/videojuego.service';

@Component({
  selector: 'app-videojuego-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './videojuego-lista.component.html',
  styleUrls: ['./videojuego-lista.css']
})
export class VideojuegoListaComponent implements OnInit {

  listaVideojuegos: Videojuego[] = [];

  juegoActual: Videojuego = {
    titulo: '',
    genero: '',
    plataforma: '',
    precio: 0
  };

  modoEdicion: boolean = false;

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit(): void {
    this.obtenerJuegos();
  }

  obtenerJuegos(): void {
    this.videojuegoService.getVideojuegos().subscribe({
      next: (data) => this.listaVideojuegos = data,
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }

  guardarJuego(): void {
    if (!this.juegoActual.titulo || !this.juegoActual.genero) {
      alert('Por favor complete el título y género');
      return;
    }

    if (this.modoEdicion && this.juegoActual.id) {
      // PUT
      this.videojuegoService.actualizarVideojuego(this.juegoActual.id, this.juegoActual).subscribe({
        next: () => {
          this.obtenerJuegos();
          this.limpiarFormulario();
        },
        error: (err) => console.error('Error al actualizar:', err)
      });
    } else {
      // POST
      this.videojuegoService.crearVideojuego(this.juegoActual).subscribe({
        next: () => {
          this.obtenerJuegos();
          this.limpiarFormulario();
        },
        error: (err) => console.error('Error al guardar:', err)
      });
    }
  }

  seleccionarParaEditar(juego: Videojuego): void {
    this.modoEdicion = true;
    this.juegoActual = { ...juego };
  }

  eliminarJuego(id: string | undefined): void {
    if (!id) return;
    if (confirm('¿Desea eliminar este videojuego?')) {
      this.videojuegoService.eliminarVideojuego(id).subscribe({
        next: () => this.obtenerJuegos(),
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }

  limpiarFormulario(): void {
    this.modoEdicion = false;
    this.juegoActual = {
      titulo: '',
      genero: '',
      plataforma: '',
      precio: 0
    };
  }
}