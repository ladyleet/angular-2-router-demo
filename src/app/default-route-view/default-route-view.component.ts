import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-default-route-view',
  templateUrl: 'default-route-view.component.html',
  styleUrls: ['default-route-view.component.css'],
  template: `
    <div>This is my default view. You know, before you click any buttons. Whoo!</div>
    <div class="red white-text"> redredredredredredredredredredredredredredredredredredredred </div>
    <div class="pink white-text"> pinkpinkpinkpinkpinkpinkpinkpinkpinkpinkpinkpinkpinkpinkpink </div>
    <div class="yellow white-text"> yellowyellowyellowyellowyellowyellowyellowyellowyellowyellow </div>
    <div class="green white-text"> greengreengreengreengreengreengreengreengreengreengreengreen </div>
    <div class="blue white-text"> blueblueblueblueblueblueblueblueblueblueblueblueblueblueblue </div>
    <div class="purple white-text"> purplepurplepurplepurplepurplepurplepurplepurplepurplepurple </div>

  `
})
export class DefaultRouteViewComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
