import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { PeliculaListasComponent } from './peliculas/peliculas-lista/pelicula-listas/pelicula-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    PeliculaListasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
