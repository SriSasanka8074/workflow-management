import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkflowManagementPageRoutingModule } from './workflow-management-routing.module';

import { WorkflowManagementPage } from './workflow-management.page';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkflowManagementPageRoutingModule
  ],
  declarations: [WorkflowManagementPage, SidebarComponent]
})
export class WorkflowManagementPageModule {}
