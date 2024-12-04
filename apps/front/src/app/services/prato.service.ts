import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE } from '@nx-monorepo/auth';
import { IPrato } from '@nx-monorepo/comum';
import { map, Observable, ReplaySubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PratoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  private _tipoSelecionado$ = new ReplaySubject<string | null>(1);
  public tipoSelecionado$ = this._tipoSelecionado$.asObservable();

  public getAll(): Observable<IPrato[]> {
    return this.httpClient.get<IPrato[]>(
      `${this.apiBase}/prato`,
    ).pipe(
      shareReplay(),
    );
  }

  public getByType(tipo: string | null): Observable<IPrato[]> {
    return this.getAll().pipe(
      map(
        pratos => tipo ? pratos.filter(prato => prato.tipo === tipo) : pratos
      )
    );
  }

}
