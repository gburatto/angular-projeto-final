import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE } from '@nx-monorepo/auth';
import { IPrato } from '@nx-monorepo/comum';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PratoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public getAll(): Observable<IPrato[]> {
    return this.httpClient.get<IPrato[]>(
      `${this.apiBase}/prato`,
    ).pipe(
      shareReplay(),
    );
  }

}
