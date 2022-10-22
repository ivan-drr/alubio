import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FavoritesService } from 'src/app/@core'; 

@Component({
  selector: 'app-modal-details',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnDestroy {

  @Input('show') show!: boolean;
  @Input('owner') owner: any;
  @Output() showDetailsChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private favoriteService: FavoritesService) { }

  ngOnDestroy(): void {
    this.handleHide();
  }

  handleHide() {
    this.showDetailsChanged.emit(false);
  }

  getFavoriteIcon() {
    if (!this.owner) return '';
    const icon: string = 'pi pi-heart';
    return this.favoriteService.isFavorite(this.owner.id) ? icon + '-fill' : icon;
  }

  handleToggleFavorites() {
    if (this.favoriteService.isFavorite(this.owner.id)) this.favoriteService.removeFavorite(this.owner.id);
    else this.favoriteService.addFavorite(this.owner);
  }

}
