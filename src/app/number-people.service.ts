import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberPeopleService {

  constructor() { }


  // Returns the number of people currently in the store
  public getPeopleInShop(

    timeForEstimate : number,
    initialClientNb : number,
    incomingClientNb : number,
    incomingClientInterval: number,
    outgoingClientNb : number,
    outgoingClientInterval : number,
  ) : number {
  
    // Number of entry in the interval
    let peopleIncomingInInterval = Math.round(timeForEstimate / incomingClientInterval) * incomingClientNb;

    // TODO No one can go out if there is no one in the store
    // Number of outputs in the interval
    let peopleOutgoingInInterval = Math.round(timeForEstimate / outgoingClientInterval) * outgoingClientNb;

    return initialClientNb + peopleIncomingInInterval - peopleOutgoingInInterval;
  }
}
