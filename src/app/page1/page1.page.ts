import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let mapboxgl: any;

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


    // tslint:disable-next-line: only-arrow-functions
    map.on('load', function() {

      map.resize();

      new mapboxgl.Marker({
        draggable: true
      })
        .setLngLat([-76.204290, 4.066043])
        .addTo(map);

      const layers = map.getStyle().layers;

      let labelLayerId;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': '#aaa',

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': .6
        }
      }, labelLayerId);

    });

  }


}
