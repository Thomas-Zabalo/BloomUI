import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {DrawerComponent} from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DrawerComponent],
  template: `

    <section>
      <aside>
        <app-drawer/>
        <div class="blur"></div>
      </aside>
      <main>
        <app-header [title]="title"/>
        <router-outlet/>
      </main>
    </section>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Handbook';
}
