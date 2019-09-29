import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  Agenda: any;

  constructor(private servicio: ServicioService) { }

  ngOnInit() {

    this.servicio.getAgenda()
      .subscribe((res) => {
        this.Agenda = res.agenda;
      });

  }

}


