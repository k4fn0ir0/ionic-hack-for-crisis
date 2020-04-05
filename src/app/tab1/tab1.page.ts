import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private _status = [{
    title: "Your health is at risk",
    description: "Your score is too high",
    score: 87,
    emoticon: "sad-outline",
    tip: "Send your report to the hospital for a check",
    action: "Send my report",
    link: ""
  }, {
    title: "You're doing great!",
    description: "Your score is meets the safety standards",
    score: 32,
    emoticon: "happy-outline",
    tip: "Stay safe, and wash your hands",
    action: "Give me more tips",
    link: ""
  }];

  title: string = "My trips";

  status: any;

  constructor() {
    this.status = this._status[Date.now() % this._status.length];
  }
  getPercentage() {
    return this.status.score / 100;
  }

}
