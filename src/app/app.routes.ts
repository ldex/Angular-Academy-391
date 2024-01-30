import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home.component';
import { ContactComponent } from './shared/contact.component';
import { AdminComponent } from './shared/admin.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ErrorComponent } from './shared/error.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductInsertComponent } from './products/product-insert/product-insert.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home Page' },
    { path: 'contact', component: ContactComponent, title: 'Contact Us' },
    { path: 'admin', component: AdminComponent, title: 'Administration' },
    { path: 'products', children: [
        { path: '', title: 'Products List',
                    loadComponent: () =>
                        import('./products/product-list/product-list.component')
                        .then(result => result.ProductListComponent)
        },
        { path: 'insert', component: ProductInsertComponent, title: 'Create a new product' },
        { path: ':id', component: ProductDetailComponent, title: 'Selected Product Details' },
    ]},
    { path: '**', component: ErrorComponent, title: 'Error!' }
];
