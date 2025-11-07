import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guidance',
  imports: [CommonModule],
  templateUrl: './guidance.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidanceComponent {
  guidanceCards = signal([
    {
      title: 'Reveal Expert Insights With Health Quizzes',
      image: 'https://picsum.photos/seed/petQuiz/400/300',
      bgColor: 'bg-teal-50',
    },
    {
      title: 'Download Vet-Approved Resources Designed for You',
      image: 'https://picsum.photos/seed/petResources/400/300',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Explore The Latest Pet Care Guidance on Our Blog',
      image: 'https://picsum.photos/seed/petBlog/400/300',
      bgColor: 'bg-yellow-50',
    },
  ]);
}