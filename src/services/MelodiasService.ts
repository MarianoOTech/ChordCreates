import { Injectable } from '@angular/core';
import { Acordes } from '../app/models/melodias/Acordes';
import { Melodia } from '../app/models/melodias/Melodia';


@Injectable({
  providedIn: 'root'
})
export class MelodiasService {
  constructor() { }
  notasPorEscala = {
    'C': {
      Mayor: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      Menor: ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']
    },
    'C#': {
      Mayor: ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'],
      Menor: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B']
    },
    'D': {
      Mayor: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
      Menor: ['D', 'E', 'F', 'G', 'A', 'A#', 'C']
    },
    'D#': {
      Mayor: ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'],
      Menor: ['D#', 'F', 'F#', 'G#', 'A#', 'B', 'C#']
    },
    'E': {
      Mayor: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
      Menor: ['E', 'F#', 'G', 'A', 'B', 'C', 'D']
    },
    'F': {
      Mayor: ['F', 'G', 'A', 'A#', 'C', 'D', 'E'],
      Menor: ['F', 'G', 'G#', 'A#', 'C', 'C#', 'D#']
    },
    'F#': {
      Mayor: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
      Menor: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E']
    },
    'G': {
      Mayor: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
      Menor: ['G', 'A', 'A#', 'C', 'D', 'D#', 'F']
    },
    'G#': {
      Mayor: ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G'],
      Menor: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#']
    },
    'A': {
      Mayor: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
      Menor: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    'A#': {
      Mayor: ['A#', 'C', 'D', 'D#', 'F', 'G', 'A'],
      Menor: ['A#', 'C', 'C#', 'D#', 'F', 'F#', 'G#']
    },
    'B': {
      Mayor: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
      Menor: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A']
    }
  };

  generarMelodia(nuevaMelodia: Acordes): Melodia {
    console.log('Nota:', nuevaMelodia.nota);
    console.log('Escala:', nuevaMelodia.escala);
    // Lógica para generar la melodía basada en el acorde recibido
    var newMelodia = new Melodia();

    // Aquí puedes implementar la lógica para generar la melodía
    // Por ejemplo, puedes asignar valores aleatorios a las notas, o generarlas de acuerdo al acorde recibido
    return newMelodia;
  }

  generarNotas(nota: string, escala: string, cantidad: 4): string[] {
    var notasDisponibles = this.notasPorEscala[escala][nota];
    var notasSeleccionadas: string[] = [];


    return notasSeleccionadas;
  }
}
