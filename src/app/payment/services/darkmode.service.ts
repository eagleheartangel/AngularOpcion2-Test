import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  darkModeInit(toggle: ElementRef): void {
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.replace('light', 'dark');
      toggle.nativeElement.setAttribute('checked', 'checked');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.replace('dark', 'light');
      toggle.nativeElement.removeAttribute('checked');
      localStorage.setItem('theme', 'light');
    }
  }

  setMode(toggle: ElementRef): void {
    if (localStorage['theme'] === 'dark') {
      document.documentElement.classList.replace('dark', 'light');
      toggle.nativeElement.setAttribute('checked', 'checked');
      localStorage.setItem('theme', 'light');
    } else if (localStorage['theme'] === 'light') {
      document.documentElement.classList.replace('light', 'dark');
      toggle.nativeElement.removeAttribute('checked');
      localStorage.setItem('theme', 'dark');
    }
  }
}

