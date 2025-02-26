import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutsComponent } from './layouts/CountryLayouts/CountryLayouts.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/CountryPage/CountryPage.component';

export const countryRoutes: Routes = [

    {
        path: '',
        component: CountryLayoutsComponent,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPageComponent
            },
            {
                path: 'by-country',
                component: ByCountryComponent
            },
            {
                path: 'by-region',
                component: ByRegionComponent
            },
            {
                path: 'by/:code',
                component: CountryPageComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            },
        ]
    }

];


export default countryRoutes;