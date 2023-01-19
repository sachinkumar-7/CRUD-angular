import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    CreateUpdateComponent,
    LayoutComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
