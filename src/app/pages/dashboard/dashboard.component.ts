import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  taskService = inject(TaskService)

  ngOnInit() {

  }
}
