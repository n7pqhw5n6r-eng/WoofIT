import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  footerColumns = signal([
    {
      title: 'Products',
      links: ['Parasite Protection', 'Skin Health', 'Quality of Life', 'Vaccines', 'All Products'],
    },
    {
      title: 'Rewards',
      links: ['Overview', 'Ways to Earn', 'FAQ'],
    },
    {
      title: 'Resources',
      links: ['Our Blog', 'Downloadables', 'Health Quizzes', 'Adoption Guide', 'Pet\'s Mental Health', 'Search'],
    },
    {
      title: 'Causes',
      links: ['American Humane', 'Adopt a Pet', 'Benefits of Pets'],
    },
    {
      title: 'Company',
      links: ['About WooflT', 'Newsroom', 'Contact Us', 'Vet Website'],
    },
  ]);
}