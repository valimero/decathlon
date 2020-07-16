import { Component, OnInit } from '@angular/core';
import { NumberPeopleService } from './number-people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'decathlon';
  
  constructor(
    private numberPeopleService: NumberPeopleService,
  )
  {}
  
  ngOnInit()
  {
    let r = this.numberPeopleService.getPeopleInShop(20, 10, 2, 1, 1, 1.5);
    
    console.log(`The number of people currently in the store : ${r}`);
  }
  
}
