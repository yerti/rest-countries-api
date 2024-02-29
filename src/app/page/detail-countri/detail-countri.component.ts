import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Location } from '@angular/common';
import { DarkModeService } from '../../service/dark-mode.service';

@Component({
  selector: 'app-detail-countri',
  templateUrl: './detail-countri.component.html',
  styleUrls: ['./detail-countri.component.css'],
})
export class DetailCountriComponent implements OnInit {
  countryName: string = '';
  countryDetails: any;
  languages: string[] = [];
  currencyName: string = '';
  neighboringCountries: string[] = [];
  isSmallScreen: boolean = false;
  isLargeScreen: boolean = false;

  @Input() titleNavbar: string = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    public darkModeService: DarkModeService
  ) {
    this.titleNavbar = '';
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 600;
    this.isLargeScreen = window.innerWidth >= 768;
  }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryName = params['name'];
      this.loadCountryDetails();
    });
    this.checkScreenSize();
  }

  loadCountryDetails() {
    this.apiService.getCountryByName(this.countryName).subscribe((data) => {
      this.countryDetails = data[0]; // Suponiendo que recibes un solo país como resultado
      this.extractLanguages(this.countryDetails);
      this.extractCurrencyName(this.countryDetails);
      this.extractNeighboringCountries(this.countryDetails);
    });
  }

  extractLanguages(countryDetails: any): void {
    console.log(countryDetails.languages); // Verifica la estructura de countryDetails.languages
    if (countryDetails && Array.isArray(countryDetails.languages)) {
      this.languages = countryDetails.languages.map((language: any) => language.value);
    }
  }

  extractCurrencyName(countryDetails: any): void {
    if (countryDetails && countryDetails.currencies) {
      const currencyCode = Object.keys(countryDetails.currencies)[0];
      this.currencyName = countryDetails.currencies[currencyCode].name;
    }
  }

  extractNeighboringCountries(countryDetails: any): void {
    if (countryDetails && Array.isArray(countryDetails.borders)) {
      this.apiService.getNeighboringCountries(countryDetails.borders).subscribe((neighboringCountriesData) => {
        console.log(neighboringCountriesData); // Verificar los datos recibidos
        this.neighboringCountries = neighboringCountriesData.map((countryData: any) => countryData[0]?.name?.common);
      });
    }
  }

  returnPage() {
    this.location.back();
  }
}
