import { Component, OnInit } from '@angular/core';
import { NumberPeopleService } from './number-people.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  numberPeopleInShop: number;

  timeForEstimateFC: FormControl = new FormControl(20);
  initialClientNbFC: FormControl = new FormControl(10);
  incomingClientNbFC: FormControl = new FormControl(2);
  incomingClientIntervalFC: FormControl = new FormControl(1);
  outgoingClientNbFC: FormControl = new FormControl(1);
  outgoingClientIntervalFC: FormControl = new FormControl(1.5);

  formGroupDecathlon: FormGroup = new FormGroup( {
    timeForEstimate: this.timeForEstimateFC,
    initialClientNb: this.initialClientNbFC,
    incomingClientNb: this.incomingClientNbFC,
    incomingClientInterval: this.incomingClientIntervalFC,
    outgoingClientNb: this.outgoingClientNbFC,
    outgoingClientInterval: this.outgoingClientIntervalFC
  });


  constructor(
    private numberPeopleService: NumberPeopleService,
  )
  {}

  ngOnInit(): void
  {
    this.updateResult();

    console.log(`The number of people currently in the store : ${this.numberPeopleInShop}`);
  }


  public updateResult(): void
  {
    this.numberPeopleInShop = this.numberPeopleService.getPeopleInShop(
      this.timeForEstimateFC.value,
      this.initialClientNbFC.value,
      this.incomingClientNbFC.value,
      this.incomingClientIntervalFC.value,
      this.outgoingClientNbFC.value,
      this.outgoingClientIntervalFC.value
    );
  }

}
