// page.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();

  constructor() {
    console.log('PageService initialized');
  }

  setPage(page: number) {
    console.log('Changing page to:', page);
    this.currentPageSubject.next(page);
  }
}