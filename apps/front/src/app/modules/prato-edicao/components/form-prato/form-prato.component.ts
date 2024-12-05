import { Component, inject, Input } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-form-prato',
  templateUrl: './form-prato.component.html',
  styleUrl: './form-prato.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class FormPratoComponent {

  @Input({
    required: true,
  })
  public id!: string;

  private fb = inject(FormBuilder);

  public formGroup = this.fb.group({
    nome: ['', Validators.required],
    imagem: ['', Validators.required],
    tipo: ['Pratos Principais', Validators.required],
    descricao: [''],
    vegetariano: [false, Validators.required],
    preco: [null, Validators.compose([
      Validators.required, Validators.min(0),
    ])],
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
