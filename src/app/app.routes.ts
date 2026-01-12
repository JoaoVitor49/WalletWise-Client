import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout.component/auth-layout.component';

export const routes: Routes = [
    {path: '', component: AuthLayoutComponent, 
        children:[
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', loadComponent: () => import('./features/auth/login/login.component/login.component').then(m => m.LoginComponent)},
            {path: 'signup', loadComponent: () => import('./features/auth/signUp/sign-up.component/sign-up.component').then(m => m.SignUpComponent)}
        ]
    }
];
