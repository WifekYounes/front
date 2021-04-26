import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtimeRoutingModule } from './realtime-routing.module';
import { RealtimeComponent } from './realtime.component';
import { DxDataGridModule, DxSelectBoxModule, DxButtonModule } from 'devextreme-angular';
import { DxPopupModule } from "devextreme-angular";
import { DxLookupModule, DxTemplateModule } from 'devextreme-angular';


@NgModule({
  declarations: [RealtimeComponent],
  imports: [
    CommonModule,
    RealtimeRoutingModule, DxDataGridModule, DxSelectBoxModule, DxButtonModule,DxPopupModule
    ,DxLookupModule, DxTemplateModule
  ]
})
export class RealtimeModule { }
