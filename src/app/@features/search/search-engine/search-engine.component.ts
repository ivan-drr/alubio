import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GorestService } from 'src/app/@core';
import { Owner } from 'src/app/@shared';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  @Output() ownersFound = new EventEmitter<Owner[]>();

  constructor(private gorest: GorestService) { }

  ngOnInit() {
  }

  handleSearch(name: string) {
    if (name.length <= 2) return;
    this.gorest
      .findOwnersByName(name)
      .subscribe((owners: Owner[]) => this.ownersFound.emit(owners));
  }

}
