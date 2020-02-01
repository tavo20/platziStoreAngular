import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {  HttpClient} from '@angular/common/http';

import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from '@core/services/products/product.service';


xdescribe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient =  TestBed.get(HttpClient);
    httpTestingController =  TestBed.get(HttpTestingController);
    service =  TestBed.get(ProductService);
  });

  it('should be creared', () => {
    expect(service).toBeTruthy();
  });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ ProductDetailComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductDetailComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
