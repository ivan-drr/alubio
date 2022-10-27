import { Component, OnInit } from '@angular/core';
import { FavoritesService, MatagatosService } from 'src/app/@core';
import { pageView } from 'src/app/@shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Home';

  matagatos: number = 0;
  favoritos: number = 0;

  displayFavorites: boolean = false;

  constructor(private favoritesService: FavoritesService, private matagatosService: MatagatosService) { }

  ngOnInit() {
    this.subscribeFavorites();
    this.subscribePageView();
    this.subscribeMatagatos();
  }

  subscribeFavorites() {
    this.favoritesService.favorites$
      .subscribe(favorites => this.favoritos = favorites.length);
  }

  subscribeMatagatos() {
    this.matagatosService.matagatos$
      .subscribe(matagatos => {
        this.matagatos = matagatos;
      });
  }

  subscribePageView() {
    pageView
      .subscribe(currentPage => this.title = currentPage);
  }

  showFavoritesChangeHandler(show: boolean) {
    this.displayFavorites = show;
  }

}
