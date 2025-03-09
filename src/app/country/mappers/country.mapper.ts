import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-country.interface";

export class CountryMapper {
    static mapRestCountrytoCountry(restCountry: RESTCountry): Country{
        return {
            capital: restCountry.capital.join(','),
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagSvg: restCountry.flags.svg,
            name: restCountry.translations['spa'].common ?? 'No spanish name',
            population: restCountry.population,
            idioma: Object.values(restCountry.languages).join(', '), // Aquí se transforma en string
            region: restCountry.region,
            subregion: restCountry.subregion
        }
    }
    static mapRestCountrytoCountryArray(restCounrtries: RESTCountry[]): 
    Country[]{
    return restCounrtries.map((country)=>this.mapRestCountrytoCountry(country))
    }
}