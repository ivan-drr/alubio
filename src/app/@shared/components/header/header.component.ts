import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mataGatos: number = 0;
  favoritos: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
