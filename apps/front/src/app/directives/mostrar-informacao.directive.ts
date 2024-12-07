import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMostrarInformacao]',
  standalone: true
})
export class MostrarInformacaoDirective {

  @Input('appMostrarInformacao') informacao!: string;
  private informacaoElemento: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {

    // Criar o elemento
    this.informacaoElemento = this.renderer.createElement('span');
    if(this.informacaoElemento){
      this.informacaoElemento.innerHTML = this.informacao;
    }

    // Estilização
    this.renderer.setStyle(this.informacaoElemento, 'background', 'rgb(27, 39, 27)');
    this.renderer.setStyle(this.informacaoElemento, 'color', '#fff');
    this.renderer.setStyle(this.informacaoElemento, 'padding', '.5em');
    this.renderer.setStyle(this.informacaoElemento, 'border-radius', '.3em');
    this.renderer.setStyle(this.informacaoElemento, 'position', 'relative');
    this.renderer.setStyle(this.informacaoElemento, 'display', 'flex');
    this.renderer.setStyle(this.informacaoElemento, 'justify-content', 'center');
    this.renderer.setStyle(this.informacaoElemento, 'margin', '2em');
    this.renderer.setStyle(this.informacaoElemento, 'z-index', '1000');

    // Adiciona ao DOM
    const parent = this.el.nativeElement.offsetParent || this.el.nativeElement;
    this.renderer.appendChild(parent, this.informacaoElemento);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.informacaoElemento) {
      this.renderer.removeChild(this.el.nativeElement.offsetParent, this.informacaoElemento);
      this.informacaoElemento = null;
    }
  }

}
