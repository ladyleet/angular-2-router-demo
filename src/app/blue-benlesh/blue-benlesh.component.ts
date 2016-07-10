import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-blue-benlesh',
  templateUrl: 'blue-benlesh.component.html',
  styleUrls: ['blue-benlesh.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="blue-text">See Ben Lesh</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/benlesh.jpg">
          </div>
          <div class="card-content">
            <p class="blue-text">Ben Lesh is blue.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BlueBenleshComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
