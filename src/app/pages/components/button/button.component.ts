import {Component} from '@angular/core';
import {ButtonGroup, buttonGroups} from '../../../data/button';
import {MarkdownComponent} from 'ngx-markdown';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-button',
  imports: [
    MarkdownComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  buttonGroups: ButtonGroup[] = buttonGroups;

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

  trackByVariant(index: number, variant: string): string {
    return variant;
  }
}
