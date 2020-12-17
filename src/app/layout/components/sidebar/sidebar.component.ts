import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationItem } from '../../model/navigation-item.model';

@Component({
  selector: 'hpt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigation: NavigationItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buildNavigation();
  }

  private buildNavigation(): void {
      this.navigation = [
        new NavigationItem('fa fa-home', 'Home', 'home'),
        new NavigationItem('fa fa-home', 'Atleten', 'athletes')
      ];
  }

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  navigate(route: string): void {
    console.log('navigate');
    this.router.navigate([route]);
  }

}
