import { TestBed, fakeAsync } from '@angular/core/testing';

import { RestWebApiService } from './restwebapi.service';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

describe('RestwebapiService', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should be created', () => {
    const service: RestWebApiService = TestBed.get(RestWebApiService);
    expect(service).toBeTruthy();
  });

  it('should get 1st TODO', (done) => {
    const service: RestWebApiService = TestBed.get(RestWebApiService);
    const expected: Todo = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    };
    service.getTodo(1).subscribe(todo => {
      expect(todo).toEqual(expected);
      done();
    });
  });
});
