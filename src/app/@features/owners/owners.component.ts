import { Component, OnInit } from '@angular/core';
import { GorestService } from 'src/app/@core';
import { Owner } from 'src/app/@shared';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

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

}
