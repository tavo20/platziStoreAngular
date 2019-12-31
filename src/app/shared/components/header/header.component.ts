import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  constructor(
    private cartServices: CartService,
  ) {
   this.total$ =  this.cartServices.cart$
    .pipe(
      map(products => products.length)
    );
    // .subscribe(total => {
    //   console.log(total);
    //   this.total = total;
    // });
  }

  ngOnInit() {
  }

}
