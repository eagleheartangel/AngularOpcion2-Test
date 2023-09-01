import { Component, ElementRef, ViewChild } from '@angular/core';
import { DarkmodeService } from 'src/app/payment/services/darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('toggle', { static: true }) toggle!: ElementRef;

  constructor(private darkMode: DarkmodeService) {}

  ngOnInit(): void {
    this.darkMode.darkModeInit(this.toggle);
  }

  darkmode() {
    this.darkMode.setMode(this.toggle);
  }
}
