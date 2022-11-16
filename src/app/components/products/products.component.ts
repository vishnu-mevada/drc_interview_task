import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    productData: any;
    productList: any[] = [];

    //Pagination
    itemsPerPage: number = 10;
    allPages: number;

    // Filter data
    filterLocation: any;
    filterBrand: any;
    filterCategory: any;
    selectedDropVal: string = '';
    rangeValues: any;
    category: any;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.getProduct();
    }

    getProduct() {
        this.apiService.getProducts().subscribe((data: any) => {
            this.productData = data.products;
            this.filterLocation = [...new Set(this.productData.map((item: any) => item.location))];
            this.filterBrand = [...new Set(this.productData.map((item: any) => item.brand))];
            this.filterCategory = [...new Set(this.productData.map((item: any) => item.category))];

            if (this.selectedDropVal.length) {
                if (this.selectedDropVal == 'all') {
                    this.productData = data.products;
                } else {
                    this.productData = [...this.productData.filter((product: any) => product.location == this.selectedDropVal || product.brand == this.selectedDropVal)];
                }
            }

            if (this.rangeValues !== undefined) {
                this.productData = [...this.productData.filter((item: any) => item.price >= this.rangeValues[0] && item.price <= this.rangeValues[1])];
            }

            if (this.category !== undefined) {
                this.productData = [...this.productData.filter((item: any) => this.category.some((b: any) => b === item.category) || this.category.length === 0)];
            }

            this.onPageChange();
            this.allPages = Math.ceil(this.productData.length / this.itemsPerPage);
        })
    }

    // Filter component
    onFilterValChange(val: any) {
        this.selectedDropVal = val;
        this.getProduct();
    }

    onCheckboxFilterChange(val: any) {
        this.category = val;
        this.getProduct();
    }

    onPriceSliderValChange(val: any) {
        this.rangeValues = val;
        this.getProduct();
    }

    // Pagination component
    onPageChange(page: number = 1): void {
        const startItem = (page - 1) * this.itemsPerPage;
        const endItem = page * this.itemsPerPage;
        this.productList = this.productData.slice(startItem, endItem);
    }

}
