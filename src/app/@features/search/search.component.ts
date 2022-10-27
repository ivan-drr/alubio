import { Component, OnInit } from '@angular/core';
import { GorestService } from 'src/app/@core';
import { Owner } from 'src/app/@shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  owners: Owner[] = [];
  loading: boolean = true;

  constructor(private gorest: GorestService) { }

  ngOnInit() {
    this.loadOwners();
  }

  loadOwners() {
    this.gorest.getOwners()
      .subscribe((owners: Owner[]) => {
        this.owners = owners;
        this.loading = false;
      });
  }

  handleOwnersFound(event: Owner[]) {
    console.log(event);
    
    this.owners = event;
  }

}
