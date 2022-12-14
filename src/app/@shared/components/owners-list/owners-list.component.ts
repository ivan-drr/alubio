import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GorestService } from 'src/app/@core';
import { Owner } from 'src/app/@shared';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {

  displayDetails: boolean = false;
  selectedOwner!: Owner;

  @Input('owners') owners: Owner[] = [];
  @Input('loading') loading: boolean = true;
  @Input('searchName') searchName!: string;

  constructor(private gorest: GorestService) { }

  ngOnInit() { }

  showMore() {
    this.loading = true;
    let owners$: Observable<Owner[]>;
    if (this.searchName) owners$ = this.gorest.findOwnersByName(this.searchName);
    else owners$ = this.gorest.getOwners();

    owners$
      .subscribe((owners: Owner[]) => {
        this.owners = [...this.owners, ...owners];
        this.loading = false;
      });
  }

  showDetails(owner: Owner) {
    this.selectedOwner = owner;
    this.displayDetails = true;
  }

  showDetailsChangeHandler(show: boolean) {
    this.displayDetails = show;
  }

}
