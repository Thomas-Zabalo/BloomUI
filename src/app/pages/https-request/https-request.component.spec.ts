import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsRequestComponent } from './https-request.component';

describe('HttpsRequestComponent', () => {
  let component: HttpsRequestComponent;
  let fixture: ComponentFixture<HttpsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpsRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
