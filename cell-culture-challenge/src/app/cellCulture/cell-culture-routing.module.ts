import { CellCultureComponent } from './cell-culture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CellCultureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CellCultureRoutingModule {
  static components = [
    CellCultureComponent,
  ]
}

