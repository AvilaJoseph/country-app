import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-country.interface";

export class CountryMapper {
    static mapRestCountrytoCountry(restCountry: RESTCountry): Country{
        return {
            capital: restCountry.capital.join(','),
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagSvg: restCountry.flags.svg,
            name: restCountry.name.common,
            population: restCountry.population
        }
    }
    static mapRestCountrytoCountryArray(restCounrtries: RESTCountry[]): Country[]{
        return restCounrtries.map((country)=>this.mapRestCountrytoCountry(country))
    }
}