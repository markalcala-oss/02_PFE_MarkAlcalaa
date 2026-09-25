import { Component } from '@angular/core';
import { VideojuegoListaComponent } from './components/videojuego-lista/videojuego-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideojuegoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = '01_PFE_MarkAlcala';
}