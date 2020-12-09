import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item-paragraph',
  templateUrl: './list-item-paragraph.component.html',
  styleUrls: ['./list-item-paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemParagraphComponent {}
