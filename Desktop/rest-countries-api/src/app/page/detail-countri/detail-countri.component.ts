import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Location } from '@angular/common';
import { DarkModeService } from '../../service/dark-mode.service';

@Component({
  selector: 'app-detail-countri',
  templateUrl: './detail-countri.component.html',
  styleUrls: ['./detail-countri.component.css']
})
export class DetailCountriComponent implements OnInit {
  countryName: string = '';
  countryDetails: any;

  @Input() titleNavbar: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location, public darkModeService: DarkModeService) {
    this.titleNavbar= ''
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryName = params['name'];
      this.loadCountryDetails();
    });
  }

  loadCountryDetails() {
    this.apiService.getCountryByName(this.countryName).subscribe(data => {
      this.countryDetails = data[0]; // Suponiendo que recibes un solo país como resultado
    });
  }

  returnPage () {
    this.location.back();
  }
}
