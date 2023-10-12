import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateNewParticipantComponent } from './create-new-participant.component';

describe('CreateNewParticipantComponent', () => {
  let component: CreateNewParticipantComponent;
  let fixture: ComponentFixture<CreateNewParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewParticipantComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
