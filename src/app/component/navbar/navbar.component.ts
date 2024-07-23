import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {



isNavbarSmall: boolean = true;

@HostListener('window:scroll', [])
onWindowScroll() {
  if (window.scrollY > 20) {
    this.isNavbarSmall = false;
  } else {
    this.isNavbarSmall = true;
    
  }
}

}




