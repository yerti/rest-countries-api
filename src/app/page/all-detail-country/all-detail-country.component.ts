import { Component, HostListener } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { DarkModeService } from '../../service/dark-mode.service';

@Component({
  selector: 'app-all-detail-country',
  templateUrl: './all-detail-country.component.html',
  styleUrls: ['./all-detail-country.component.css']
})
export class AllDetailCountryComponent {
  data: any[] = [];
  filteredData: any[] = [];
  isDisplayed: boolean = false;
  isSmallScreen: boolean = false;
  isLargeScreen: boolean = false;

  constructor(private apiService: ApiService, private router: Router, public darkModeService: DarkModeService) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 600;
    this.isLargeScreen = window.innerWidth >= 768;
  }
  ngOnInit(): void {
    this.fillData();
    this.checkScreenSize();
  }

  fillData(searchTerm?: string) {
    this.apiService.getData().subscribe(data => {
      this.data = data;

      if (searchTerm) {
        this.filteredData = this.data.filter(item => {
          if (typeof item.name.common === 'string') {
            return item.name.common.toLowerCase().includes(searchTerm.toLowerCase());
          } else {
            return false;
          }
        });
      } else {
        this.filteredData = this.data;
      }
    });
  }
  fillDataRegion(searchTermRegion?: string) {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      if(searchTermRegion) {
        this.filteredData = this.data.filter(item => {
          if(typeof item.region === 'string') {
            return item.region.toLowerCase().includes(searchTermRegion.toLowerCase());
          } else {
            return false;
          }
        });
      } else {
        this.filteredData = this.data;
      }
    });
  }

  searchCountry(e: any) {
    const searchTerm = e.target.value;
    this.fillData(searchTerm);
  }

  searchRegion(regionName: string) {
    this.fillDataRegion(regionName);
  }

  toogleDisplay() {
    this.isDisplayed = !this.isDisplayed
  }

  showCountryDetails(countryName: string) {
    this.router.navigate(['/country', countryName]);
  }
}
