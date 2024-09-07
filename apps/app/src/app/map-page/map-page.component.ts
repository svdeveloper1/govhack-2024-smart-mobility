import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [
    CommonModule,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    LeafletModule,
  ],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css',
})
export class MapPageComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 10,
    center: latLng(-37.8136, 144.9631),
  };
}
