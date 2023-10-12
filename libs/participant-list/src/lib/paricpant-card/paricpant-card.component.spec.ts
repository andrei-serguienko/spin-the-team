import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParicpantCardComponent } from './paricpant-card.component';

describe('ParicpantCardComponent', () => {
  let component: ParicpantCardComponent;
  let fixture: ComponentFixture<ParicpantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParicpantCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParicpantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
