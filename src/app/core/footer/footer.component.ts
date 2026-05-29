import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly navItems = PORTFOLIO.navItems;
  readonly social = PORTFOLIO.footerSocial;
  readonly year = PORTFOLIO.copyrightYear;
  readonly name = PORTFOLIO.profile.name;
}
