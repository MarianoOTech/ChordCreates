import { Injectable } from '@angular/core';

import { Acordes } from '../app/models/melodias/Acordes';
import { Melodia } from '../app/models/melodias/Melodia';

@Injectable({
  providedIn: 'root'
})
export class MelodiasService {
  constructor() {}
  notasPorEscala: { [nota: string]: { [escala: string]: string[] } } = {
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

  instrumentosImagenes:{ [instrumento: string]: { [nota:string]: string } }= {
    'Piano': {
        'C': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FC_Piano.png?alt=media&token=f718234d-76af-4f3a-880a-770d0426f368',
        'C#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FC%23_Piano.png?alt=media&token=b2cc11d6-3c92-4f09-80df-42330fe96aa7',
        'D': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FD_Piano.png?alt=media&token=3ec48005-84e6-45de-9468-c4f2b953469c',
        'D#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FD%23_Piano.png?alt=media&token=5241f006-c2cd-47fe-a35c-e79abd192192',
        'E': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FE_Piano.png?alt=media&token=bab97043-0ddd-4dfb-b1d8-6170a480b06f',
        'F': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FF_Piano.png?alt=media&token=70bde9fe-2e14-4e4d-b123-dac34bfa8b95',
        'F#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FF%23_Piano.png?alt=media&token=0239206a-11de-4863-91a1-b610e7189caa',
        'G': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FG_Piano.png?alt=media&token=453ef8d0-5c40-4c62-8619-db4f10859a07',
        'G#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FG%23_Piano.png?alt=media&token=b3437178-a614-4df4-a9d1-82aabd636e15',
        'A': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FA_Piano.png?alt=media&token=fee35820-2260-485a-86fd-faf52a538a3f',
        'A#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FA%23_Piano.png?alt=media&token=05da097b-ba60-4636-a19c-1f437dfa56bb',
        'B': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FPiano_Major%2FB_Piano.png?alt=media&token=821486a4-206d-4f2e-8ffb-0e8492324f0d'
    },
    'Guitarra': {
      'C': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FC_Guitarra.png?alt=media&token=023f7e53-da78-44c2-9589-0ef695c6749c',
      'C#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FC%23_Guitarra.png?alt=media&token=8b862687-9bf1-492a-9e1d-799292a211d0',
      'D': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FD_Guitarra.png?alt=media&token=98bf2ad4-619b-471a-abd1-912c03247d0a',
      'D#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FD_Guitarra.png?alt=media&token=98bf2ad4-619b-471a-abd1-912c03247d0a',
      'E': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FE_Guitarra.png?alt=media&token=0325cef0-3826-4902-a2b8-93ad4a3e6757',
      'F': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FF_Guitarra.png?alt=media&token=06b8b8c3-4ea2-407a-86a3-b71c3d0dc010',
      'F#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FF%23_Guitarra.png?alt=media&token=5243bd8b-9228-443b-9790-86c0df05ffe9',
      'G': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FG_Guitarra.png?alt=media&token=af2067a1-bd6b-47dd-86a8-37dd294b8b90',
      'G#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FG%23_Guitarra.png?alt=media&token=e461142d-eedd-4a0e-b886-4f12f61e587a',
      'A': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FA_Guitarra.png?alt=media&token=afad1ff2-575b-4c6f-acbf-7bfa3be91d66',
      'A#': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FA%23_Guitarra.png?alt=media&token=49ce4570-c979-486b-913f-73670ecb2b08',
      'B': 'https://firebasestorage.googleapis.com/v0/b/chordcreates.appspot.com/o/img%2FMelodias%2FGuitarra_Major%2FB_Guitarra.png?alt=media&token=6040d5e2-81ff-42dd-8bdb-51535e31f802'
    }
    // Puedes agregar más instrumentos aquí si es necesario
  };
  
  SonidoNotas:{ [instrumento: string]: { [nota:string]: string } }= {
    'Piano': {
        'C': '../../assets/audio/Piano/C_Piano.mp3',
        'C#': '../assets/audio/Piano/Cs_Piano.mp3',
        'D': '../assets/audio/Piano/D_Piano.mp3',
        'D#': '../assets/audio/Piano/Ds_Piano.mp3',
        'E': '../assets/audio/Piano/E_Piano.mp3',
        'F': '../assets/audio/Piano/F_Piano.mp3',
        'F#': '../assets/audio/Piano/Fs_Piano.mp3',
        'G': '../assets/audio/Piano/G_Piano.mp3',
        'G#': '../assets/audio/Piano/Gs_Piano.mp3',
        'A': '../assets/audio/Piano/A_Piano.mp3',
        'A#': '../assets/audio/Piano/As_Piano.mp3',
        'B': '../assets/audio/Piano/B_Piano.mp3',
    },
    'Guitarra': {
      'C': '../../assets/audio/Guitar/C_guitar.mp3',
      'C#': '../../assets/audio/Guitar/Cs_guitar.mp3',
      'D': '../../assets/audio/Guitar/D_guitar.mp3',
      'D#': '../../assets/audio/Guitar/Ds_guitar.mp3',
      'E': '../../assets/audio/Guitar/E_guitar.mp3',
      'F': '../../assets/audio/Guitar/F_guitar.mp3',
      'F#': '../../assets/audio/Guitar/Fs_guitar.mp3',
      'G': '../../assets/audio/Guitar/G_guitar.mp3',
      'G#':'../../assets/audio/Guitar/Gs_guitar.mp3',
      'A': '../../assets/audio/Guitar/A_guitar.mp3',
      'A#': '../../assets/audio/Guitar/As_guitar.mp3',
      'B': '../../assets/audio/Guitar/B_guitar.mp3',
    }
  };

  generarNotas(nota: string, escala: string, cantidad: number): string[] {
    var notasDisponibles = this.notasPorEscala[nota][escala];
    var notasSeleccionadas: string[] = [];
    // Generar notas aleatorias
    while (notasSeleccionadas.length < cantidad) {
      const notaAleatoria = this.obtenerNotaAleatoria(notasDisponibles);
      notasSeleccionadas.push(notaAleatoria);
    }

    return notasSeleccionadas;
  }
  
  // Método para obtener una nota aleatoria de un conjunto de notas
  obtenerNotaAleatoria(notas: string[]): string {
    const indiceAleatorio = Math.floor(Math.random() * notas.length);
    return notas[indiceAleatorio];
  }

  // Método para obtener todas las
  obtenerNotasEscala(nota: string, escala: string): string[] {
    return this.notasPorEscala[nota][escala];
  }

  //Optener las imagnees
  obtenerImagen(instrumento: string, nota: string): string {
    if (instrumento in this.instrumentosImagenes && nota in this.instrumentosImagenes[instrumento]) {
      return this.instrumentosImagenes[instrumento][nota];
    } else {
      return '';
    }
  }

  obtenerSonido(instrumento: string, nota: string): string {
    if (instrumento in this.SonidoNotas && nota in this.SonidoNotas[instrumento]) {
      return this.SonidoNotas[instrumento][nota];
    } else {
      return '';
    }
  }
}