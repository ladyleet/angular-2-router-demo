import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-pink-easty',
  templateUrl: 'pink-easty.component.html',
  styleUrls: ['pink-easty.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="pink-text">David East has a pink shirt.</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/pinkeasty.jpeg">
          </div>
          <div class="card-content">
            <p class="pink-text">See David's pink shirt.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PinkEastyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
