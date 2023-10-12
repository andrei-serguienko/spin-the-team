import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackCardComponent } from './back-card.component';

describe('BackCardComponent', () => {
  let component: BackCardComponent;
  let fixture: ComponentFixture<BackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
