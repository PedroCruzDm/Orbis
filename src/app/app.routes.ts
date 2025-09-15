import { Routes } from '@angular/router';
import { HomeComponent } from './components/HomePage/app.HomePage';
import { CadastroComponent } from './components/Cadastro/app.Cadastro';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'login',
        component: CadastroComponent
    },
    {
        path: 'dashboard',
        component: CadastroComponent
    },
    {
        path: 'profile',
        component: CadastroComponent
    },
    {
        path: 'settings',
        component: CadastroComponent
    },
    {
        path: 'calendario',
        component: HomeComponent
    },
    {
        path: 'ranking',
        component: HomeComponent
    },
    {
        path: 'foco',
        component: HomeComponent
    }
];