import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarInformacaoDirective } from '../../directives/mostrar-informacao.directive';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    CommonModule,
    MostrarInformacaoDirective,
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css',
})
export class SobreComponent {}
