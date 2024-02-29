import { Component, HostListener } from '@angular/core';
import { DarkModeService } from '../../service/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSmallScreen: boolean = false;
  isLargeScreen: boolean = false;

  constructor(public darkModeService: DarkModeService) {}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }


  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 600;
    this.isLargeScreen = window.innerWidth >= 768;
  }
  ngOnInit(): void {
    this.checkScreenSize();
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
