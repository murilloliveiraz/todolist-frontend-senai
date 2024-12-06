import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';
import { Usuario } from 'src/models/usuario';
import { Observable } from 'rxjs';
import { UsuarioResponse } from 'src/models/usuarioResponse';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly apiUrl = `${environment.endPoint}/users`;

  constructor(private http: HttpClient) {}

  createUser(model: Usuario): Observable<UsuarioResponse> {
    return this.http.post<UsuarioResponse>(`${this.apiUrl}`, model);
  }
}
