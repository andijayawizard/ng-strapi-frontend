import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import COUNTRIES from 'src/app/apollo/queries/country/country';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private apollo: Apollo) { }
  getCountries(): Observable<Country[]> {
    return this.apollo.watchQuery<any>({
      query: COUNTRIES
    }).valueChanges.pipe(map((result) => result.data.countries))
  }
}
