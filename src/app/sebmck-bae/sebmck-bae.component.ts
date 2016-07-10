import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sebmck-bae',
  templateUrl: 'sebmck-bae.component.html',
  styleUrls: ['sebmck-bae.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="teal-text">Seb's Bae</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6 m6 l3">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/sebmck-bae-2.jpg">
          </div>
          <div class="card-content">
            <p class="teal-text text-lighten-2">So bae.</p>
          </div>
        </div>
      </div>
      <div class="col s6 m6 l3">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/sebmck-bae-3.jpg">
          </div>
          <div class="card-content">
            <p class="teal-text">Baebel.js</p>
          </div>
        </div>
      </div>
      <div class="col s6 m6 l3">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/sebmck-bae-4.jpg">
          </div>
          <div class="card-content">
            <p class="teal-text text-darken-2">Seb's bae.</p>
          </div>
        </div>
      </div>
      <div class="col s6 m6 l3">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/sebmck-bae.jpg">
          </div>
          <div class="card-content">
            <p class="teal-text text-darken-4">Bae all day.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SebmckBaeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
