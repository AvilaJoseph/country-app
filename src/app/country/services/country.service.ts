import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient)



  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountrytoCountryArray(restCountries)),
        catchError(error => {
          console.log('Error fetching:', error);
          return throwError(() =>
            new Error(`No se encontraron resultados con esta capital: ${query}`)
          );
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountrytoCountryArray(resp)),
      delay(2000),
      catchError(error => {
        console.log('Error fetching:', error);
        return throwError(() =>
          new Error(`No se encontraron resultados con este país: ${query}`)
        );
      })
    );
  }

  searchCountrybyAlphaCode(code: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((resp) => CountryMapper.mapRestCountrytoCountryArray(resp)),
      delay(2000),
      catchError(error => {
        console.log('Error fetching:', error);
        return throwError(() =>
          new Error(`No se pudo encontrar informacion de este país: ${code}`)
        );
      })
    );
  }
}
