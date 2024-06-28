import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTicketComponent } from './single-ticket.component';

describe('SingleTicketComponent', () => {
  let component: SingleTicketComponent;
  let fixture: ComponentFixture<SingleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
