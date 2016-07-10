import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-red-saccone',
  templateUrl: 'red-saccone.component.html',
  styleUrls: ['red-saccone.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="red-text">Sam has a red hat</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/samccone.jpeg">
          </div>
          <div class="card-content">
            <p class="red-text">See Sam's red hat.</p>
          </div>
        </div>
      </div>
  `
})
export class RedSacconeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
