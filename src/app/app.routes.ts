import { Routes } from '@angular/router';
import { HomeComponent } from './components/HomePage/app.HomePage';
import { CadastroComponent } from './components/Cadastro/app.Cadastro';
import { ProfileHome } from './components/Profile/app.Profile';

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
        path: 'register',
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
    },
    {
        path: 'profile',
        component: ProfileHome
    }
];