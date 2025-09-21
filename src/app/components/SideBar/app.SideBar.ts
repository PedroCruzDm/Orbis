import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import './Css/SideBar.css';

interface Link {
    name: string;
    href: string;
}

@Component({
    selector: 'app-side-bar',
    standalone: true,
    styleUrls: ['./Css/SideBar.css'],
    imports: [CommonModule],
    template: `
        <aside class="sidebarStyle">
            <nav>
                <a
                    *ngFor="let link of links; let i = index"
                    [href]="link.href"
                    [ngStyle]="getLinkStyle(i)"
                    (mouseenter)="hovered = i"
                    (mouseleave)="hovered = null"
                >
                    {{ link.name }}
                </a>
            </nav>
        </aside>
    `
})
export class SideBarComponent {
    stylesUrl = ['./Css/SideBar.css'];
    links: Link[] = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Modo Sono', href: '/modo-sono' },
        { name: 'Agenda', href: '/agenda' },
        { name: 'Modo Foco', href: '/modo-foco' },
        { name: 'Ranking', href: '/ranking' },
        { name: 'Configurações', href: '/configuracoes' }
    ];
    hovered: number | null = null;

    

    getLinkStyle(i: number) {
        return {
            display: 'block',
            padding: '12px 24px',
            color: this.hovered === i ? '#222' : '#fff',
            background: this.hovered === i ? '#fff' : 'transparent',
            textDecoration: 'none',
            borderRadius: '4px',
            margin: '4px 0',
            transition: 'background 0.2s, color 0.2s'
        };
    }
}