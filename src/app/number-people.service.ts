import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberPeopleService {

  constructor() { }


  // Returns the number of people currently in the store
  public getPeopleInShop(
    timeForEstimate: number,
    initialClientNb: number,
    incomingClientNb: number,
    incomingClientInterval: number,
    outgoingClientNb: number,
    outgoingClientInterval: number,
  ): number {

    let peopleIncomingInInterval = 0;
    let peopleOutgoingInInterval = 0;

    if(incomingClientNb > 0 && incomingClientInterval > 0)
    {
      // Number of entry in the interval
      peopleIncomingInInterval = Math.round(timeForEstimate / incomingClientInterval) * incomingClientNb;
    }

    // TODO No one can go out if there is no one in the store
    if(outgoingClientNb > 0 && outgoingClientInterval > 0)
    {
      // Number of outputs in the interval
      peopleOutgoingInInterval = Math.round(timeForEstimate / outgoingClientInterval) * outgoingClientNb;
    }

    const peopleInShop = initialClientNb + peopleIncomingInInterval - peopleOutgoingInInterval;

    return peopleInShop < 0 ? 0 : peopleInShop;
  }
}
