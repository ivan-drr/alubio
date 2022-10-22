import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { GorestService } from 'src/app/@core';
import { Owner } from 'src/app/@shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  owners!: Owner[];
  loading: boolean = true

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

}
