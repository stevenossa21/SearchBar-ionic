import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit, AfterViewInit {


  ngOnInit() {

  }

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVub3NzYTIxIiwiYSI6ImNrMThkcDJnejBmbDgzcHJ2bDN5Zm9td2gifQ.p0EiKAfNDIj8zIe1oGucoA';
    const map = new mapboxgl.Map({

      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.198950, 4.063275],
      zoom: 15.5,
      pitch: 45,
      earing: -17.6,
      container: 'map',
      antialias: true
    });


    map.on('load', function () {

      map.resize();

      new mapboxgl.Marker({
        draggable: true
        })
        .setLngLat([-76.204290, 4.066043])
        .addTo(map);
    });

  }


}
