import { Component, signal } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../services/productservice';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { SelectButton } from 'primeng/selectbutton';


@Component({
    selector: 'app-result-view',
    standalone: true,
    imports: [DataView, ButtonModule, Tag, CommonModule, FormsModule, SelectButton],
    providers: [ProductService],
    templateUrl: './result-view-component.html',
    styleUrls: ['./result-view-component.scss']
})
export class ResultViewComponent {
    layout: 'list' | 'grid' = 'grid';

    products = signal<any>([]);

    options: ('list' | 'grid')[] = ['list', 'grid'];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => {
            this.products.set([...data.slice(0,12)]);
        });
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    }
}
