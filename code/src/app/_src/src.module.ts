import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SRCRoutes } from './src.routing';
import { ConsulComponent } from './consul.component';
import { SharedModule } from 'app/_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(SRCRoutes)
  ],
  declarations: [
    ConsulComponent,
  ]
})
export class SRCModule {}
