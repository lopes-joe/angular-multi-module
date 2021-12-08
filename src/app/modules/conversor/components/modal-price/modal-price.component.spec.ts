import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateBrPipe } from '../../pipes';
import { ConversorService } from '../../services';

import { ModalPriceComponent } from './modal-price.component';

describe('ModalPriceComponent', () => {
  let component: ModalPriceComponent;
  let fixture: ComponentFixture<ModalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ModalPriceComponent,
        DateBrPipe
      ],
      providers: [
        ConversorService
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
