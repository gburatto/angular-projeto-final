import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { PratoService } from '../../services/prato.service';
import { VegetarianoPipe } from '../../pipes/vegetariano/vegetariano.pipe';
import { FiltrarPorTipoPipe } from '../../pipes/filtrar-por-tipo/filtrar-por-tipo.pipe';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '@nx-monorepo/auth';
import { map, Observable, shareReplay } from 'rxjs';

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

  private breakpointObserver = inject(BreakpointObserver);

  public authService = inject(AuthService);

  private pratoService = inject(PratoService);
  public prato$ = this.pratoService.getAll();

  public tipos = ['Pratos Principais', 'Porções', 'Sobremesas'];
  public tipoSelecionado: string | null =  null;

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(
    Breakpoints.XSmall,
  ).pipe(
    map(result => result.matches),
    shareReplay(),
  );

  isSmall$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.Small, Breakpoints.XSmall,
  ]).pipe(
    map(result => result.matches),
    shareReplay(),
  );

}
