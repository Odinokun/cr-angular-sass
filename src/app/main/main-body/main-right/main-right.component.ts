import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-right',
  templateUrl: './main-right.component.html',
  styleUrls: ['./main-right.component.sass']
})
export class MainRightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const profileOpen = document.getElementById('header-profile');
    const profile = document.getElementById('main__right');
    const layout = document.getElementById('main__body');

    profileOpen.addEventListener('click', () => {
      profile.classList.toggle('active');
      layout.classList.toggle('active');
    });
  }

}
