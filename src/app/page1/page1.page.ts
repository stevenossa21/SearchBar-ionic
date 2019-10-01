import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  tipo: any;

  constructor(private network: Network) {
    console.log(this.network.type);
    this.tipo = this.network.type;
  }

  ngOnInit() {

  }

}
