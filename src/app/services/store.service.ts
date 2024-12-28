import { Injectable, signal } from '@angular/core';

export class Item {
  id!: number;
  name!: string;
}


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _items = signal<Array<Item>>([]);
  items = this._items.asReadonly();
  
  constructor() { } 

  addItem(item: Item) {
    const currentItems = this.items();
    currentItems.push({
      ...item,
      id: currentItems.length + 1
    });
    this._items.set(currentItems);
  }

  removeItem(itemId: number) {
    const currentItems = this.items();
    const itemIndex = currentItems.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
      currentItems.splice(itemIndex, 1);
      this._items.set(currentItems);
    }
  }
}
