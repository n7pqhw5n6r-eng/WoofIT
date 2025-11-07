import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended',
  imports: [CommonModule],
  templateUrl: './recommended.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendedComponent {
  articles = signal([
    {
      category: 'Comfort & Pain Relief',
      title: 'Chronic vs. Acute Pain in Cats',
      image: 'https://picsum.photos/seed/recCat/400/250',
      linkText: 'Read More',
    },
    {
      category: 'Quiz',
      title: 'Save the World From Evil Parasites in Our Parasite Defense Quiz',
      image: 'https://picsum.photos/seed/recQuiz/400/250',
      linkText: 'Take Quiz',
    },
    {
      category: 'Fleas, Ticks, & Heartworms',
      title: 'How to Safely Remove a Tick from Your Dog',
      image: 'https://picsum.photos/seed/recTick/400/250',
      linkText: 'Read More',
    },
    {
      category: 'Resources',
      title: 'Use Our Spring Cleaning Checklist to Help Touch-Up Your Pet\'s Things',
      image: 'https://picsum.photos/seed/recClean/400/250',
      linkText: 'Download Now',
    },
  ]);
}