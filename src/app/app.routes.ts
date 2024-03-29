import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { InfoMinionComponent } from './info-minion/info-minion.component';
import { MinionsComponent } from './minions/minions.component';
import { MinionFormComponent } from './minion-form/minion-form.component';

export const routes: Routes = [
    {path:'',component:WelcomeComponent},
    {path:'home',component:WelcomeComponent},
    {path:'minions',component:MinionsComponent,
        children: [
        //     {path: 'info/:id', component: InfoMinionComponent}
            {path: ':id', component: InfoMinionComponent}
        ]
    },
    // {path:'minions/:searchTerm',component:MinionsComponent,
    //     children: [
    //         {path: 'info/:id', component: InfoMinionComponent}
    //     ]
    // },
    {path: 'search/:search', component: MinionsComponent},
    {path: 'add', component: MinionFormComponent},
    {path: 'edit/:id', component: MinionFormComponent},
    {path: '**', redirectTo: ''}
];
