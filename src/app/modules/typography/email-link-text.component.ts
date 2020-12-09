import { ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-email-link-text',
  templateUrl: './email-link-text.component.html',
  styleUrls: ['./email-link-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailLinkTextComponent implements OnChanges {
  @Input() email: string;

  resolvedHref: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.email) {
      this.resolveHref();
    }
  }

  private resolveHref(): void {
    if (this.email) {
      this.resolvedHref = `mailto:${this.email}`;
    } else {
      this.resolveHref = null;
    }
  }
}
