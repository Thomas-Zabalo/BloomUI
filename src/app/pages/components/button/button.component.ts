import {Component} from '@angular/core';
import {ButtonGroup, buttonGroups} from '../../../data/button';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonGroups: ButtonGroup[] = buttonGroups;
  // stocke l'onglet actif pour chaque groupe
  activeTabs: { [label: string]: string } = {};

  setActiveTab(label: string, tab: string) {
    this.activeTabs[label] = tab;
  }

  getActiveTab(label: string): string {
    return this.activeTabs[label] || 'preview';
  }

  trackByLabel(index: number, group: ButtonGroup): string {
    return group.label;
  }

  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copié !');
    });
  }

}
