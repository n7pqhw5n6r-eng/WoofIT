import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {}