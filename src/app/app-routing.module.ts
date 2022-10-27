import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./@features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'owners',
    loadChildren: () =>
      import('./@features/owners/owners.module').then((m) => m.OwnersModule)
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./@features/search/search.module').then((m) => m.SearchModule)
  },
  {
    path: 'thanks',
    loadChildren: () =>
      import('./@features/thanks/thanks.module').then((m) => m.ThanksModule)
  },
  {
    path: '404', loadChildren: () =>
      import('./@features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: '**', loadChildren: () =>
      import('./@features/home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
