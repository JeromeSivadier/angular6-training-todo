import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreatorComponent } from './todo-creator.component';
import { AppModule } from '../app.module';

describe('TodoCreatorComponent', () => {
  let component: TodoCreatorComponent;
  let fixture: ComponentFixture<TodoCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
