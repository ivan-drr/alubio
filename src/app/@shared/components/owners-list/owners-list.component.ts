import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GorestService } from 'src/app/@core';
import { Owner } from 'src/app/@shared';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {

  owners!: Owner[];
  loading: boolean = false

  displayDetails: boolean = false;
  selectedOwner!: Owner;

  @Output() datatable = new EventEmitter<any>();

  constructor(private gorest: GorestService) { }

  ngOnInit() {
    this.gorest.subscribeOwners();
    this.gorest.perdiodicUpdateOwners();
  }

  lazyLoadOwners() {
    this.gorest.owners
      .subscribe((o: Owner[]) => this.owners = o);
  }

  showDetails(owner: Owner) {
    this.selectedOwner = owner;
    this.displayDetails = true;
  }

  showDetailsChangeHandler(show: boolean) {
    this.displayDetails = show;
  }

}
