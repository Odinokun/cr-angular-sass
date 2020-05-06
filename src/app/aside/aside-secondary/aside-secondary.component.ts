import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-secondary',
  templateUrl: './aside-secondary.component.html',
  styleUrls: ['./aside-secondary.component.sass']
})
export class AsideSecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const btn = document.getElementById('aside-secondary__mobile-btn');
    const aside = document.getElementById('aside-secondary');

    btn.addEventListener('click', () => {
      aside.classList.toggle('active');
    });
  }

}
