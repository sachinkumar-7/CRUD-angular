import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { CreateUpdateComponent } from './create-update/create-update.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: CreateUpdateComponent },
            { path: 'edit/:id', component: CreateUpdateComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }