import {Component, Inject} from '@angular/core';
import {CommonModule, DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  toggleNav() {
    this.document.body.classList.toggle('nav-open');
  }
}
