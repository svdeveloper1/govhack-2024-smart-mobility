import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [CommonModule,  MatDrawerContainer, MatDrawer, MatDrawerContent],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css',
})
export class MapPageComponent {

}
