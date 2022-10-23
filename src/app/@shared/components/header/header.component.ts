import { Component, OnInit } from '@angular/core';
import { FavoritesService, GorestService } from 'src/app/@core';
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

  constructor(private favoritesService: FavoritesService, private gorest: GorestService) { }

  ngOnInit() {
    this.subscribeFavorites();
    this.subscribePageView();
    this.subscribeMatagatos();
  }

  subscribeFavorites() {
    this.favoritesService.favorites
      .subscribe(favorites => this.favoritos = favorites.length);
  }

  subscribeMatagatos() {
    this.gorest.matagatos
      .subscribe(matagatos => {
        this.matagatos = matagatos;
      });
  }

  subscribePageView() {
    pageView
      .subscribe(currentPage => this.title = currentPage);
  }

}
