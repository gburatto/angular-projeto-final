import { Pipe, PipeTransform } from '@angular/core';
import { IPrato } from '@nx-monorepo/comum';

@Pipe({
  name: 'filtrarPorTipo',
  standalone: true,
})
export class FiltrarPorTipoPipe implements PipeTransform {
  transform(pratos: IPrato[], tipoSelecionado: string | null): IPrato[] {
    if (!tipoSelecionado) {
      return pratos;
    }
    return pratos.filter(prato => prato.tipo === tipoSelecionado);
  }
}
