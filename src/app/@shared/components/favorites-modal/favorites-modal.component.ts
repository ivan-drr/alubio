import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/@core';
import { Owner } from '../../models/owner';
import { disrupSubscription, safeSubscribe } from '../../utils/manage-subscriptions';

@Component({
  selector: 'app-favorites-modal',
  templateUrl: './favorites-modal.component.html',
  styleUrls: ['./favorites-modal.component.scss']
})
export class FavoritesModalComponent implements OnInit, OnDestroy {

  favorites: Owner[] = [];
  favoritesSubscription!: Subscription;

  selectedOwner!: Owner;
  displayDetails: boolean = false;

  @Input('show') show!: boolean;
  @Output() showFavoritesChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favoritesSubscription = safeSubscribe(this.favoritesService.favorites$, this.favoritesSubscription)
      .subscribe((favorites: Owner[]) => this.favorites = favorites);
  }

  ngOnDestroy(): void {
    disrupSubscription(this.favoritesSubscription);
  }

  handleHide() {
    this.showFavoritesChanged.emit(false);
  }

  showDetails(owner: Owner) {
    this.selectedOwner = owner;
    this.displayDetails = true;
  }

  showDetailsChangeHandler(show: boolean) {
    this.displayDetails = show;
  }

}
