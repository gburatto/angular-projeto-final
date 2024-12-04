import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPratoComponent } from './components/form-prato/form-prato.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormPratoComponent,
    data: {
      id: '',
    },
  },
  {
    path: ':id',
    component: FormPratoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PratoEdicaoRoutingModule { }
