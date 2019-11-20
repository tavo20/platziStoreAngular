import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/banner/banner-1.webp',
    'assets/banner/banner-2.webp',
    'assets/banner/banner-3.webp',
  ];

  constructor() { }

  ngOnInit() {
  }

}
