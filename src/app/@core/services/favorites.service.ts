import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Owner } from 'src/app/@shared';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: BehaviorSubject<Owner[]> = new BehaviorSubject<Owner[]>([])

  constructor() { }

  addFavorite(owner: Owner): void {
    this.favorites.value.push(owner);
    this.favorites.next(this.favorites.value);    
  }

  removeFavorite(ownerId: number): void {
    this.favorites.next(this.favorites.value.filter(o => o.id !== ownerId));
  }

  isFavorite(ownerId: number) {
    if (this.favorites.value) return this.favorites.value.find(o => o.id === ownerId);
    return false;
  }

  countFavorites(): number {
    return this.favorites.value.length;
  }

}
