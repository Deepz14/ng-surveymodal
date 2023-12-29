import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPromptComponent } from './notification-prompt.component';

describe('NotificationPromptComponent', () => {
  let component: NotificationPromptComponent;
  let fixture: ComponentFixture<NotificationPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationPromptComponent]
    });
    fixture = TestBed.createComponent(NotificationPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
