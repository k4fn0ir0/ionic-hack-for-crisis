import { Component } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private _status = [{
    title: "Your health is at risk",
    description: "Your score is too high",
    score: 87,
    emoticon: "sad-outline",
    tip: "Send your report to the hospital for a check",
    action: "Send my report",
    link: "",
    disabled:false

  }, {
    title: "You're doing great!",
    description: "Your score is meets the safety standards",
    score: 32,
    emoticon: "happy-outline",
    tip: "Stay safe, and wash your hands",
    action: "Give me more tips",
    link: "",
    disabled: true
  }];

  title: string = "My score";

  status: any;

  constructor() {
    this.status = this._status[Date.now() % this._status.length];
  }
  getPercentage(){
    return this.status.score/100;
  }

}
