import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { PratoEdicaoService } from '../../services/prato-edicao.service';
import { IPrato } from '@nx-monorepo/comum';


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
export class FormPratoComponent implements OnInit{

  @Input({
    required: true,
  })
  public get id(): string {
    return `${this.formGroup.controls['_id'].value || ''}`;
  }
  public set id(value: string) {
    this.formGroup.controls['_id'].setValue(+(value || '0'));
  }

  private router = inject(Router);
  private fb = inject(FormBuilder);

  private pratoEdicaoService = inject(PratoEdicaoService);

  public formGroup = this.fb.group({
    _id: [0],
    nome: ['', Validators.required],
    imagem: ['', Validators.required],
    tipo: ['Pratos Principais', Validators.required],
    descricao: [''],
    vegetariano: [false, Validators.required],
    preco: [0, Validators.compose([
      Validators.required, Validators.min(0),
    ])],
  });

  onSubmit(): void {
    const iPrato = <IPrato>this.formGroup.value;
    // Se estiver editando:
    if (this.id) {
      this.pratoEdicaoService.put(iPrato).subscribe(() => {
        this.router.navigate([ '/' ]);
      });

    // Se for um favorito novo:
    } else {
      this.pratoEdicaoService.post(iPrato).subscribe(() => {
        this.router.navigate([ '/' ]);
      });
    }
  }

  public ngOnInit(): void {
    // Se estiver editando:
    if (this.id) {
      this.pratoEdicaoService.get(+this.id).subscribe(iPrato => {
        this.formGroup.setValue(iPrato);
      });
    }
  }
}
