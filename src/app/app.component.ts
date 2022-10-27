import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './@core';
import { pageView, safeSubscribe } from './@shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alubio';
  routerSub!: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.handlePagination();
    this.authService.singIn({token: 'b081bc52d4a3e834403ce87acdca56c2f63a4f3a72a68e50e1240301800b6199'});
  }

  handlePagination() {
    this.routerSub = safeSubscribe(this.router.events, this.routerSub)
      .subscribe((r: any) => {
        if (r instanceof NavigationEnd) {
          if (r.url === '/') pageView.next('Home');

          let currentPage: string = r.url.substring(1, r.url.length);
          currentPage = currentPage[0]?.toUpperCase() + currentPage.substring(1);
          if (currentPage !== 'undefined') pageView.next(currentPage);
        };
      });
  }

}
