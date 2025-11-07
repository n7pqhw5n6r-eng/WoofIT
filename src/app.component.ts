import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { GuidanceComponent } from './components/guidance/guidance.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { SafetyInfoComponent } from './components/safety-info/safety-info.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    GuidanceComponent,
    NewsletterComponent,
    RecommendedComponent,
    SafetyInfoComponent,
    FooterComponent
  ]
})
export class AppComponent {}