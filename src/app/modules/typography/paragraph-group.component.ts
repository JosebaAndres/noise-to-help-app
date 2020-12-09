import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph-group',
  templateUrl: './paragraph-group.component.html',
  styleUrls: ['./paragraph-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParagraphGroupComponent {}
