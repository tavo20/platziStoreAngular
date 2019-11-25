import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos = [];
  displayedColumns: string[] = ['id', 'Titulo', 'Precio', 'Acciones'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.fetchProduts();
  }
  fetchProduts() {
    this.productService.getProductos()
      .subscribe((productos) => {
        this.productos = productos;
        console.log(this.productos);
      });
  }
  deleteProducto(id: string){
    this.productService.deleteProduct(id)
      .subscribe(() => {
        console.log('Elimina');
        for (let i = 0; i < this.productos.length; i++) {
            if(this.productos[i].id == id){
              this.productos.splice(i, 1);
            }
        }
      });
  }

}
