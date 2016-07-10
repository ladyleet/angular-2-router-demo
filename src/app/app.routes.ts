import { DefaultRouteViewComponent } from './default-route-view';
import { RedSacconeComponent } from './red-saccone';
import { YellowJeffyComponent } from './yellow-jeffy';
import { GreenBroccoliComponent } from './green-broccoli';
import { BlueBenleshComponent } from './blue-benlesh';
import { PurpleLarkinComponent } from './purple-larkin';
import { PinkEastyComponent } from './pink-easty';
import { SebmckBaeComponent } from './sebmck-bae';

export const AppRoutes = [
  { path: '', component: DefaultRouteViewComponent },
  { path: 'red-saccone', component: RedSacconeComponent },
  { path: 'yellow-jeffy', component: YellowJeffyComponent },
  { path: 'green-broccoli', component: GreenBroccoliComponent },
  { path: 'blue-benlesh', component: BlueBenleshComponent },
  { path: 'purple-larkin', component: PurpleLarkinComponent },
  { path: 'pink-easty', component: PinkEastyComponent },
  { path: 'sebmck-bae', component: SebmckBaeComponent },
];
