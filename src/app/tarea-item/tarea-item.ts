import { Component, input, output } from '@angular/core';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  templateUrl: './tarea-item.html',
  styleUrl: './tarea-item.css'
})
export class TareaItem {

  tarea = input.required<Tarea>();

  completar = output<number>();
  eliminar = output<number>();

  alCompletar(): void {
    this.completar.emit(this.tarea().id);
  }

  alEliminar(): void {
    this.eliminar.emit(this.tarea().id);
  }
}