import { InMemoryDataService } from './../../../../.history/src/app/shared/data-services/in-memory-data.service_20250202185921';
import { TestBed } from '@angular/core/testing';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
