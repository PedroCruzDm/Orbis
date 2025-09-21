import { Component } from '@angular/core';
import { NavBarComponent } from '../NavBar/app.NavBar';
import { SideBarComponent } from '../SideBar/app.SideBar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent],
  styleUrls: ['../../app.css'],
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="divisoria">
      <app-side-bar></app-side-bar>
      <div>
        <p>Conteúdo do Perfil</p>
      </div>
    </div>
    `
})
export class ProfileHome {}