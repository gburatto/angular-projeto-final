import { Route } from '@angular/router';

import { CardapioComponent } from './components/cardapio/cardapio.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cardapio',
  },
  {
    title: 'Cardápio',
    path: 'cardapio',
    component: CardapioComponent,
  },
  {
    title: 'Sobre',
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'prato-edicao',
    loadChildren: () => import(
      './modules/prato-edicao/prato-edicao.module',
    ).then(m => m.PratoEdicaoModule),
  },
  {
    path: 'favorito-edicao',
    loadChildren: () => import(
      './modules/favorito-edicao/favorito-edicao.module',
    ).then(m => m.FavoritoEdicaoModule),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/sobre',
  },
];
