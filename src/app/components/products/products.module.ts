import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { SliderModule } from 'primeng/slider';

import { ProductsComponent } from './products.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
    declarations: [
        ProductsComponent,
        PaginationComponent,
        FilterComponent,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        SliderModule
    ]
})
export class ProductsModule { }
