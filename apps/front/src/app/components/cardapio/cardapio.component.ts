import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PratoService } from '../../services/prato.service';
import { VegetarianoPipe } from '../../pipes/vegetariano/vegetariano.pipe';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    VegetarianoPipe,
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css',
})
export class CardapioComponent {

  private pratoService = inject(PratoService);
  public prato$ = this.pratoService.getAll();

}
