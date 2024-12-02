import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PratoService } from '../../services/prato.service';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css',
})
export class CardapioComponent {

  private pratoService = inject(PratoService);
  public prato$ = this.pratoService.getAll();
  
}
