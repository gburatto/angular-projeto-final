import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vegetariano',
  standalone: true,
})
export class VegetarianoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
