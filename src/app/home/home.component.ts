import { Component, NgModule } from '@angular/core';
import { MelodiasService } from '../../services/melodias.service';
import { Acordes } from '../models/melodias/Acordes';
import { Melodia } from '../models/melodias/Melodia';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  notaSeleccionada: string = 'C';
  escalaSeleccionada: string = 'Menor';
  instrumentoSeleccionado: string = 'Piano';
  notasGeneradas: string[] = [];
  notasEscalas: string[] = [];
  imagenSeleccionada: string = ''; 
  verimagenSeleccionada: string = ''; 
  constructor(private melodiaServices: MelodiasService) {}

  MyMelodia = new Melodia();

  guardarMelodia() {
    // Crear una nueva instancia de la clase Acordes y asignar los valores seleccionados
    var nuevaMelodia = new Acordes();
    nuevaMelodia.nota = this.notaSeleccionada;
    nuevaMelodia.escala = this.escalaSeleccionada;
    nuevaMelodia.instrumento = this.instrumentoSeleccionado;

    console.log(nuevaMelodia.nota);
    console.log(nuevaMelodia.escala)
    const notasMelodia = this.melodiaServices.generarNotas(nuevaMelodia.nota, nuevaMelodia.escala, 4);
    
    // Imprimir las notas generadas en la consola para verificar
    this.notasGeneradas = notasMelodia;
    console.log('Notas generadas:', notasMelodia);

    // Cargar y mostrar las notas de la escala
    this.notasEscalas = this.melodiaServices.obtenerNotasEscala(this.notaSeleccionada, this.escalaSeleccionada);
  }

  mostrarImagen(notaSeleccionada: string) {
    var miMelodia = new Acordes();
    miMelodia.instrumento = this.instrumentoSeleccionado
    console.log("Nota seleccionada:", notaSeleccionada);

    const enlaceImagen = this.melodiaServices.obtenerImagen(miMelodia.instrumento, notaSeleccionada);
    
    console.log("Enlace de la imagen:", enlaceImagen);
    this.imagenSeleccionada = enlaceImagen;
  }
  mostrarImagenNota(notaSeleccionada: string) {
    var miMelodia = new Acordes();
    miMelodia.instrumento = this.instrumentoSeleccionado
    console.log("Nota seleccionada:", notaSeleccionada);

    const urlImagen = this.melodiaServices.obtenerImagen(miMelodia.instrumento, notaSeleccionada);
    
    console.log("Enlace de la imagen:", urlImagen);
    this.verimagenSeleccionada = urlImagen;
  }
}

