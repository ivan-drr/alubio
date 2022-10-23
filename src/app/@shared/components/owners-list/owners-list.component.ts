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
  loading: boolean = true

  displayDetails: boolean = false;
  selectedOwner!: Owner;

  @Output() datatable = new EventEmitter<any>();

  constructor(private gorest: GorestService) { }

  ngOnInit() {
  }

  lazyLoadOwners() {
    this.gorest.getOwners()
      .subscribe(owners => {
        if (!this.loading) this.loading = true;
        this.owners = owners;
        this.loading = false;
      })
  }

  showDetails(owner: Owner) {
    this.selectedOwner = owner;
    this.displayDetails = true;
  }

  showDetailsChangeHandler(show: boolean) {
    this.displayDetails = show;
  }

}
