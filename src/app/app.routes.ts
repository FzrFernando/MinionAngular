import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { InfoMinionComponent } from './info-minion/info-minion.component';
import { MinionsComponent } from './minions/minions.component';

export const routes: Routes = [
    {path:'',component:WelcomeComponent},
    {path:'home',component:WelcomeComponent},
    {path:'minions',component:MinionsComponent,
        children: [
            {path: 'info/:name', component: InfoMinionComponent}
        ]
    },
    {path:'minions/:searchTerm',component:MinionsComponent,
        children: [
            {path: 'info/:name', component: InfoMinionComponent}
        ]
    }
];
