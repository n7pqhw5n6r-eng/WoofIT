import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent {}