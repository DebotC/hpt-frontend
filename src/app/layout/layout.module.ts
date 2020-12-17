import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, NavItemComponent],
  exports: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
