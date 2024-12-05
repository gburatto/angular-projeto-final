import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE } from '@nx-monorepo/auth';
import { IPrato } from '@nx-monorepo/comum';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PratoEdicaoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public get(id: number): Observable<IPrato> {
    return this.httpClient.get<IPrato>(
      `${this.apiBase}/prato/${id}`,
    );
  }

  public put(iPrato: IPrato): Observable<IPrato> {
    const req$ = this.httpClient.put<IPrato>(
      `${this.apiBase}/prato/${iPrato._id}`,
      iPrato,
    ).pipe(
      share(),
    );

    // Dispara a requisição:
    req$.subscribe();
    
    return req$;
  }

}
