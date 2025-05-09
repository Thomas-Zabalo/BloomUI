import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DrawerComponent} from './components/drawer/drawer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BloomUI';
}
