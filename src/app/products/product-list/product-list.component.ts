import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title = 'Products'
  errorMessage: string
  selectedProduct: Product
  private productService = inject(ProductService)
  products$ = this
                .productService
                .products$
                .pipe(
                  catchError(
                    error => {
                      this.errorMessage = error
                      return EMPTY
                    }
                  )
                );

  onSelect(product: Product) {
    this.selectedProduct = product
  }
}
