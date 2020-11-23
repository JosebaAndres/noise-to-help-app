import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsPageComponent {}
