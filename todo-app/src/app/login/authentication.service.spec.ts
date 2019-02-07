import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { RoutingModule } from '../routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoggingService } from '../utils/logging.service';
import { AppModule } from '../app.module';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
