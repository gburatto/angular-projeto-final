import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode'

import { IUsuarioESenha, IUsuarioLogado } from '@nx-monorepo/comum';

import { API_BASE } from '../auth/auth.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);
  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  private _jwt$ = new ReplaySubject<string | undefined>(1);
  public jwt$ = this._jwt$.asObservable();

  public logado$ = this.jwt$.pipe(
    map(jwt => jwt ? true : false),
  );

  constructor(
  ) {
    this._jwt$.next(this.jwt || undefined);


    // Logout quando o token expirar:
    if(this.jwt$ != undefined){
      setInterval(() => {
        const jwt = this.jwt;
        if (jwt && !this.isTokenValid(jwt || undefined)) {
          this.logout();
        }
      }, 1000 * 60);
    }
  }

  public get jwt(): string | null {
    return window.localStorage.getItem('jwt');
  }

  public login(usuario: IUsuarioESenha): Observable<IUsuarioLogado> {
    return this.httpClient.post<IUsuarioLogado>(
      `${this.apiBase}/auth/login`,
      usuario,
    ).pipe(
      tap(usuarioLogado => {
        window.localStorage.setItem('jwt', usuarioLogado.jwt);
        this._jwt$.next(usuarioLogado.jwt);
      }),
    );
  }

  public logout(): void {
    window.localStorage.removeItem('jwt');
    this._jwt$.next(undefined);
    this.router.navigate([ '/auth' ]);
  }

  // Verifica se o token não expirou:
  private isTokenValid(token: string | undefined): boolean {
    if (!token) {
      return false;
    } try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      const now = Date.now() / 1000;
      return exp > now;
    } catch (error) {
      return false;
    }
  }

}
