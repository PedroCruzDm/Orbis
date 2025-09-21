import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRegistrerComponent } from '../Modals/Registrer/app.ModalRegistrer';

@Component({
  selector: 'app-home',
  styleUrls: ['./Css/HomePage.css'],
  template: `
    <div class="header__homePage">
      <h1>Orbis</h1>
      <ul>
        <li>
          <button (click)="openRegisterModal()">Registrar-se</button>
        </li>
        <li>
          <button>Login</button>
        </li>
      </ul>
    </div>

    <main class="main-home">
      <div class="homepage-card">
        <h2 class="homepage-title">Orbis</h2>
        <h3 class="homepage-subtitle">Gerenciador de Rotinas e Tarefas</h3>
      </div>
      <div [style]="{ height: '20px', background: '#929394ff' }"></div>

      <div class="info-cards">
        <div class="info-card">
          <div class="title_Card">Título do Card</div>
        </div>
      </div>

      <app-modal-registrer 
        [isOpen]="showRegisterModal" 
        (onClose)="closeRegisterModal()"
        (onCreate)="handleCreate($event)">
      </app-modal-registrer>
    </main>
  `,
  standalone: true,
  imports: [CommonModule, ModalRegistrerComponent]
})

export class HomeComponent {
  showRegisterModal = false;

  openRegisterModal() {
    this.showRegisterModal = true;
  }

  closeRegisterModal() {
    this.showRegisterModal = false;
  }

  handleCreate(userData: { name: string; email: string; password: string }) {
    console.log('Novo usuário:', userData);
    // Aqui você pode adicionar a lógica para criar o usuário no Firebase
    this.closeRegisterModal();
  }
}