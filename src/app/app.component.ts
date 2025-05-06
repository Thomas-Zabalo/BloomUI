import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DrawerComponent} from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawerComponent],
  template: `

    <div class="layout">
      <aside>
        <app-drawer/>
        <div class="blur"></div>
      </aside>
      <section>
        <main>
          <router-outlet/>
        </main>
      </section>
    </div>

  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Handbook';
}
