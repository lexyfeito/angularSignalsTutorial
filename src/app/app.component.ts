import { Component, Signal } from '@angular/core';
import { Item, StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  items: Signal<Array<Item>>;
  constructor(private storeService: StoreService) {
    this.items = this.storeService.items;
  }

  addItem() {
    this.storeService.addItem({
      id: 0,
      name: 'name'
    });
  }

  removeItem(itemId: number) {
    this.storeService.removeItem(itemId);
  }
}
