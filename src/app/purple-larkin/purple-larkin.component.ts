import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-purple-larkin',
  templateUrl: 'purple-larkin.component.html',
  styleUrls: ['purple-larkin.component.css'],
  template: `
  <div class="row">
    <div class="col s12">
      <h3 class="purple-text">Purple @TheLarkInn</h3>
    </div>
  </div>
  <div class="row">
    <div class="col s6">
      <div class="card">
        <div class="card-image">
          <img class="responsive-img" src="/img/purple-larkin.jpg">
        </div>
        <div class="card-content">
          <p class="purple-text">Shai's kisses === purple hearts of love.</p>
        </div>
      </div>
    </div>
  </div>
  `
})
export class PurpleLarkinComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
