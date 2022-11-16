import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    @Input() locationData: any;
    @Input() brandData: any;
    @Input() categoryData: any;
    @Output() filterValue: EventEmitter<string> = new EventEmitter<string>();
    @Output() checkboxValue: EventEmitter<any> = new EventEmitter<any>();
    @Output() priceSliderValue: EventEmitter<any> = new EventEmitter<any>();
    selectedCityVal: string = '';
    selectedBrandVal: string = '';
    rangeValues: number[] = [0, 1800];
    cities: any = [];

    constructor() { }

    ngOnInit(): void {
    }

    changedLocationVal(event: any) {
        this.filterValue.emit(this.selectedCityVal);
    }

    cahngedBrandVal(event: any) {
        this.filterValue.emit(this.selectedBrandVal);
    }

    selectedCheckboxVal(val: any) {
        if (this.cities.some((a: any) => a === val)) {
            this.cities = this.cities.filter((a: any) => a !== val);
        } else {
            this.cities.push(val);
        }
        this.checkboxValue.emit(this.cities);
    }

    priceRangeSliderVal(val: any) {
        this.priceSliderValue.emit(this.rangeValues);
    }

}
