import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Link {
    name: string;
    href: string;
}

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [CommonModule],
    template: `
        <nav [ngStyle]="navBarStyle">
            <div [ngStyle]="logoStyle">Orbis</div>
            <div [ngStyle]="navLinksStyle">
                <a
                    *ngFor="let link of links; let i = index"
                    [href]="link.href"
                    [ngStyle]="getLinkStyle(i)"
                    (mouseenter)="hovered = i"
                    (mouseleave)="hovered = null"
                >
                    {{ link.name }}
                </a>
            </div>
        </nav>
    `
})

export class NavBarComponent {
    links: Link[] = [
        { name: 'Home', href: '/profile' },
        { name: 'Sair', href: '#' }
    ];

    hovered: number | null = null;

    navBarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#50A1FF',
        padding: '0.50rem 2rem',
        color: '#fff',
    };

    logoStyle = {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#fff',
        letterSpacing: '2px',
    };

    navLinksStyle = {
        display: 'flex',
        gap: '1.5rem',
    };

    linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '1rem',
        transition: 'color 0.2s',
    };

    linkHoverStyle = {
        color: '#bbdefb',
    };

    getLinkStyle(i: number) {
        return this.hovered === i
            ? { ...this.linkStyle, ...this.linkHoverStyle }
            : this.linkStyle;
    }
}