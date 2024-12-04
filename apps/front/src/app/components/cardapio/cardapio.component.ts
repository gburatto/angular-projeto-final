import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { PratoService } from '../../services/prato.service';
import { VegetarianoPipe } from '../../pipes/vegetariano/vegetariano.pipe';
import { Observable } from 'rxjs';
import { IPrato } from '@nx-monorepo/comum';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    VegetarianoPipe,
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css',
})
export class CardapioComponent {

  private pratoService = inject(PratoService);
  public prato$ = this.pratoService.getAll();

  public tipos = ['Pratos Principais', 'Porções', 'Sobremesas'];
  public tipoSelecionado: string | null =  null;

  public pratosFiltrados$: Observable<IPrato[]>;

  constructor() {
    this.pratosFiltrados$ = this.pratoService.getByType(null);
  }

  public filtrarPorTipo(tipo: string | null): void {
    this.tipoSelecionado = this.tipoSelecionado === tipo ? null : tipo;
    this.pratosFiltrados$ = this.pratoService.getByType(this.tipoSelecionado);
  }

}
