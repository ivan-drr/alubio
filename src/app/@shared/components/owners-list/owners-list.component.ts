import { Component, Input, OnInit } from '@angular/core';
import { GorestService } from 'src/app/@core';
import { Owner } from 'src/app/@shared';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss']
})
export class OwnersListComponent implements OnInit {

  owners!: Owner[];
  loading: boolean = true;
  ownersLoad: number = 0;

  displayDetails: boolean = false;
  selectedOwner!: Owner;

  @Input('search') search: boolean = false;

  constructor(private gorest: GorestService) { }

  ngOnInit() {
    this.loadOwners();
    this.gorest.subscribeOwners();
    this.gorest.perdiodicUpdateOwners();
  }

  loadOwners() {
    if (this.gorest.owners)
      this.gorest.owners
        .subscribe((o: any) => {
          this.ownersLoad++;
          if (this.ownersLoad === 1) return;

          this.owners = o;
          this.loading = false;
        });
  }

  showMore() {
    this.loading = true;
    this.gorest.getOwners()
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
