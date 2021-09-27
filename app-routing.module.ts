import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [ { path: '', redirectTo: 'test', pathMatch: 'full' },
{ path: 'test', component: TestComponent },
{ path: 'edit/:Id', component: EditComponent},
{path: 'view/:Id', component: ViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
