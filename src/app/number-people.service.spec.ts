import { TestBed } from '@angular/core/testing';

import { NumberPeopleService } from './number-people.service';

describe('NumberPeopleService', () => {
  let service: NumberPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("getPeopleInShop()", () => {
    
    it('should return 37', () => {
        expect(service.getPeopleInShop(20, 10, 2, 1, 1, 1.5)).toEqual(37);
      })
    
  })
});
