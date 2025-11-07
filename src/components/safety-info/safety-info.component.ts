import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-safety-info',
  templateUrl: './safety-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafetyInfoComponent {}