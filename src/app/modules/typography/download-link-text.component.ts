import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-download-link-text',
  templateUrl: './download-link-text.component.html',
  styleUrls: ['./download-link-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadLinkTextComponent {
  @Input() link: string;
  @Input() fileName: string;
}
