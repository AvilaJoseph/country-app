import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutsComponent } from './layouts/CountryLayouts/CountryLayouts.component';

export const countryRoutes: Routes = [

    {
        path: '',
        component: CountryLayoutsComponent,
        children: [
            {
                path:'by-capital',
                component: ByCapitalPageComponent
            }
        ]
    }

];


export default countryRoutes;