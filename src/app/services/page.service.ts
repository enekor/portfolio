// page.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pageSource = new BehaviorSubject<number>(0);
  currentPage = this.pageSource.asObservable();

  changePage(page: number) {
    this.pageSource.next(page);
  }
}