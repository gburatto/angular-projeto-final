import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { PratoService } from '../../services/prato.service';
import { VegetarianoPipe } from '../../pipes/vegetariano/vegetariano.pipe';
import { Observable } from 'rxjs';
import { IPrato } from '@nx-monorepo/comum';
import { FiltrarPorTipoPipe } from '../../pipes/filtrar-por-tipo/filtrar-por-tipo.pipe';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    VegetarianoPipe,
    FiltrarPorTipoPipe,
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css',
})
export class CardapioComponent {

  private pratoService = inject(PratoService);
  public prato$ = this.pratoService.getAll();

  public tipos = ['Pratos Principais', 'Porções', 'Sobremesas'];
  public tipoSelecionado: string | null =  null;

}
