import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./@features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'owners',
    canActivate: [AuthGuard],
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
