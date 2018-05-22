import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-listas',
  templateUrl: './pelicula-listas.component.html',
  styleUrls: ['./pelicula-listas.component.css']
})
export class PeliculaListasComponent implements OnInit {
  @Input() urlImagen: string;
  @Input() descripcionImagen: string;
  @Input() nombrePelicula: string;
  @Input() descripcionPelicula: string;
  @Input() esEstreno: boolean;
  textoEstreno: string;
  claseEstreno: string;
  constructor() { }

  ngOnInit() {
  }

}
