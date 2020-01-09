import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MemberListComponent } from './Components/member-list/member-list.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { ListsComponent } from './Components/lists/lists.component';
import { AuthGuard } from './Guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent}
        ]
    },
    
    { path: '**', redirectTo: '', pathMatch: 'full'}
];