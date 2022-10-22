import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { pageView, safeSubscribe } from './@shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alubio';
  routerSub!: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
