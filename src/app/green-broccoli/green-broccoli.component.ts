import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-green-broccoli',
  templateUrl: 'green-broccoli.component.html',
  styleUrls: ['green-broccoli.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="green-text">Broccoli is green.</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/broccoli.jpg">
          </div>
          <div class="card-content">
            <p class="pink-text">Broccoli is wearing a broccoli shirt.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class GreenBroccoliComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
