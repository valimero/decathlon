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

    it('should return 0', () => {
      expect(service.getPeopleInShop(20, 40, 0, 1, 2, 1)).toEqual(0);
    })

    it('should return 20', () => {
      expect(service.getPeopleInShop(10, 40, 0, 1, 2, 1)).toEqual(20);
    })


    it('should return 40', () => {
      expect(service.getPeopleInShop(10, 40, 2, 1, 2, 1)).toEqual(40);
    })

    it('should return 1', () => {
      expect(service.getPeopleInShop(20, 41, 0, 1, 2, 1)).toEqual(1);
    })
    
  })
});
