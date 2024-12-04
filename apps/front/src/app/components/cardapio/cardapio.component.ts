import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { PratoService } from '../../services/prato.service';
import { VegetarianoPipe } from '../../pipes/vegetariano/vegetariano.pipe';
import { FiltrarPorTipoPipe } from '../../pipes/filtrar-por-tipo/filtrar-por-tipo.pipe';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    VegetarianoPipe,
    FiltrarPorTipoPipe,
    RouterModule,
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
