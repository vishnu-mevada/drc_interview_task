import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    @Input() itemsPerPage: number;
    @Input() itemsNumber: number;
    @Input() allPagesNumber: number;
    @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
    private _currentPage: number = 1;

    constructor() { }
    ngOnInit(): void {
    }

    get currentPage(): number {
        return this._currentPage;
    }

    set currentPage(page) {
        this._currentPage = page;
        this.changePage.emit(this.currentPage);
    }

    onSetPage(event: any): void {
        this.currentPage = event.target.value;
    }

    onFirstPage(): void {
        this.currentPage = 1;
    }

    onLastPage(): void {
        this.currentPage = this.allPagesNumber;
    }

    onNextPage(): void {
        if (this.currentPage < this.allPagesNumber) {
            this.currentPage += 1;
        }
    }

    onPreviousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage -= 1;
        }
    }
}
