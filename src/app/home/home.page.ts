import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  Agenda: any = [];
  textoBuscar = '';
  tipo: any;
  constructor(private servicio: ServicioService, private network: Network, private dialogs: Dialogs) { }

  ngOnInit() {

    this.tipo = this.network.type;

    this.dialogs.alert(this.tipo)
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));

    this.servicio.getAgenda()
      .subscribe((res) => {
        this.Agenda = res;
        console.log(this.Agenda);

      });

  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
}
