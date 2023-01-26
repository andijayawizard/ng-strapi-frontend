import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  displayedColumns: string[] = [
    'name', 'capital', 'currency', 'emoji', 'phone', 'continent'
  ]
  dataSource$: any = this.countryService.getCountries
  constructor(private countryService: CountryService) { }
}
