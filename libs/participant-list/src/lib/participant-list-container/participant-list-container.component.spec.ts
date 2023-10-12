import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticipantListContainerComponent } from './participant-list-container.component';

describe('ParticipantListContainerComponent', () => {
  let component: ParticipantListContainerComponent;
  let fixture: ComponentFixture<ParticipantListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
