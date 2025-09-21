import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-modal-registrer',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <div *ngIf="isOpen" class="overlay">
            <div class="modal">
                <h2>Criar conta na Orbis</h2>
                <p>Bem-vindo ao Orbis! Por favor, preencha os dados abaixo para criar sua conta e melhorar sua rotina.</p>
                <form (ngSubmit)="handleSubmit()" #formRef="ngForm">
                    <div class="field">
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="name"
                            [(ngModel)]="form.name"
                            required
                        />
                    </div>
                    <div class="field">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            [(ngModel)]="form.email"
                            required
                        />
                    </div>
                    <div class="field">
                        <label for="Idade">Idade:</label>
                        <input 
                            type="number" 
                            name="age" 
                            id="Idade" 
                            [(ngModel)]="form.age" required 
                        />
                    </div>
                    <div class="field">
                        <label>Disponibilidade:</label>
                        <select name="disponibilidade" [(ngModel)]="form.disponibilidade" required>
                            <option value="" disabled selected>Selecione</option>
                            <option value="nenhum">Nenhum</option>
                            <option value="escola">Escola</option>
                            <option value="trabalho">Trabalho</option>
                            <option value="ambos">Ambos</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>
                            <input type="checkbox" name="modoFoco" [(ngModel)]="form.modoFoco" />
                            Modo Foco
                        </label>
                    </div>
                    <div class="field">
                        <label>
                            <input type="checkbox" name="modoCalendario" [(ngModel)]="form.modoCalendario" />
                            Modo Calendário
                        </label>
                    </div>
                    <div class="field">
                        <label>
                            <input type="checkbox" name="modoSono" [(ngModel)]="form.modoSono" />
                            Modo Sono
                        </label>
                    </div>
                    <div class="field">
                        <label>Notificações:</label>
                        <select name="notificacao" [(ngModel)]="form.notificacao" required>
                            <option value="" disabled selected>Selecione</option>
                            <option value="nenhum">Nenhum</option>
                            <option value="relatorio">Relatório semanal</option>
                            <option value="calendario">Calendário</option>
                            <option value="ambos">Ambos</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Senha:</label>
                        <input
                            type="password"
                            name="password"
                            [(ngModel)]="form.password"
                            required
                        />
                    </div>
                    <div class="field">
                        <label>Confirmar senha:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            [(ngModel)]="form.confirmPassword"
                            required
                        />
                    </div>
                    <div class="actions">
                        <button type="submit" [disabled]="formRef.invalid || form.password !== form.confirmPassword">Criar</button>
                        <button type="button" (click)="onClose.emit()">Cancelar</button>
                    </div>
                    <div *ngIf="form.password !== form.confirmPassword && form.confirmPassword" style="color: red; font-size: 12px;">
                        As senhas não coincidem.
                    </div>
                </form>
            </div>
        </div>
    `,
    styles: [`
        .overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5); display: flex;
            align-items: center; justify-content: center; z-index: 1000;
        }
        .modal {
            background: #fff; padding: 24px; border-radius: 8px; min-width: 320px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .field {
            margin-bottom: 16px; display: flex; flex-direction: column;
        }
        .actions {
            display: flex; gap: 8px; justify-content: flex-end;
        }
    `]
})
export class ModalRegistrerComponent {
    @Input() isOpen = false;
    @Output() onClose = new EventEmitter<void>();
    @Output() onCreate = new EventEmitter<any>();

    form = {
        name: '',
        email: '',
        age: '',
        disponibilidade: '',
        modoFoco: false,
        modoCalendario: false,
        modoSono: false,
        notificacao: '',
        password: '',
        confirmPassword: ''
    };

    handleSubmit() {
        if (this.form.password !== this.form.confirmPassword) return;
        const { confirmPassword, ...userData } = this.form;
        this.onCreate.emit(userData);
        this.form = {
            name: '',
            email: '',
            age: '',
            disponibilidade: '',
            modoFoco: false,
            modoCalendario: false,
            modoSono: false,
            notificacao: '',
            password: '',
            confirmPassword: ''
        };
        this.onClose.emit();
    }
}