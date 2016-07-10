import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-yellow-jeffy',
  templateUrl: 'yellow-jeffy.component.html',
  styleUrls: ['yellow-jeffy.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="yellow-text text-darken-2">Jeff has a yellow beard</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/jeffcrossbeard.jpg">
          </div>
          <div class="card-content">
            <p class="yellow-text text-darken-2">See Jeff's yellow beard.</p>
          </div>
        </div>
        </div>
        <div class="col s6">
          <div class="card">
            <div class="card-image">
              <img class="responsive-img" src="/img/jeffcrossyellowbeard.png">
            </div>
            <div class="card-content">
              <p class="yellow-text text-darken-2">Follow @jeffcrossbeard.</p>
            </div>
          </div>
        </div>
      </div>
  `
})
export class YellowJeffyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
