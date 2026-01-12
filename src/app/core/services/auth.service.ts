import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CreateUser, LoginUser, LoginUserResponse, UserResponse } from '../models/user.model';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl+'/User';
  private http = inject(HttpClient);
  private router = inject(Router);

  login(credentials: LoginUser){
    return this.http.post<LoginUserResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap( res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/dashboard']);
      })
    )
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  Create(data: CreateUser){
    return this.http.post<UserResponse>(`${this.apiUrl}`, data);
  }

  getUser(): UserResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
