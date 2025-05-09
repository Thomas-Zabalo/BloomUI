import {Component} from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {NgIf} from '@angular/common';
import {ButtonGroup, buttonGroups} from '../../../data/button';

@Component({
  selector: 'app-dropdown',
  imports: [MarkdownComponent, NgIf],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  d: ButtonGroup[] = buttonGroups;

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

  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  protected readonly buttonGroups = buttonGroups;
}
