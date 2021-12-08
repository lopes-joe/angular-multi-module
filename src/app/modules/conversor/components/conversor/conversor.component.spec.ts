import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyService } from '../../services/currency/currency.service';
import { ConversorComponent } from './conversor.component';
import { ConversorService } from '../../services/conversor/conversor.service'
import { NumberDirective } from '../../directives/number.directive';
import { DateBrPipe } from '../../pipes';
import { ModalPriceComponent } from '../modal-price';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ConversorComponent,
        ConversorService,
        NumberDirective,
        DateBrPipe,
        ModalPriceComponent
      ],
      providers: [
        CurrencyService,
        ConversorService
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
