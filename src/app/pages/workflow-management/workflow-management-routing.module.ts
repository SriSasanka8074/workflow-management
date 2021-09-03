import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkflowManagementPage } from './workflow-management.page';

const routes: Routes = [
  {
    path: '',
    component: WorkflowManagementPage,
    children: [
      {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'folder/inbox'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkflowManagementPageRoutingModule {}
