import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vegetariano',
  standalone: true,
})
export class VegetarianoPipe implements PipeTransform {

  /**
   * Retorna a string `'Vegetariano'` ou `'Não Vegetariano'` e a classe correspondente, de acordo com o valor booleano.
   *
   * @param bool Valor booleano a ser verificado.
   */
  public transform(
    bool: boolean,
  ): { texto: string, classe: string } {
    return bool
    ? { texto: 'Vegetariano', classe: 'vegetariano'}
    : { texto: "Não Vegetariano", classe: "nao-vegetariano"};
  }
  
}
