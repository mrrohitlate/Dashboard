import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCamImageComponent } from './web-cam-image.component';

describe('WebCamImageComponent', () => {
  let component: WebCamImageComponent;
  let fixture: ComponentFixture<WebCamImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebCamImageComponent]
    });
    fixture = TestBed.createComponent(WebCamImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
