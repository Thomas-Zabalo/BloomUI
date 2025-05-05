import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {DrawerComponent} from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DrawerComponent],
  template: `
    <app-header [title]="title"/>
    <section>
      <aside>
        <app-drawer/>
      </aside>
      <main>
        <router-outlet/>
      </main>
    </section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Handbook';
}
