import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellCultureComponent } from './cellCulture/cell-culture.component';

const routes: Routes = [
  {
    path: 'cell-culture',
    component: CellCultureComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
