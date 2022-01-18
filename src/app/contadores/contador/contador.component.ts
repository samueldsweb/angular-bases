import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <button (click)="acumulador(base)"> +{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumulador(-base)"> -{{base}} </button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador';
    numero: number = 0;
    base: number = 5;

    acumulador ( valor: number ) {
        this.numero += valor;
    }
}