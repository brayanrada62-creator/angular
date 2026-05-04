import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {

  nombre: string = 'Brayan';
  profesion: string = 'Desarrollador de Software';
  habilidades: string[] = ['Angular', 'TypeScript', 'CSS'];

  mostrarHabilidades: boolean = false;
  contadorLikes: number = 0;
  disponible: boolean = true;

  alternarHabilidades() {
    this.mostrarHabilidades = !this.mostrarHabilidades;
  }

  darLike() {
    this.contadorLikes++;
  }

  cambiarEstado() {
    this.disponible = !this.disponible;
  }
}