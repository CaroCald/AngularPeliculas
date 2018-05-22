import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mostrarHola = true;
  arregloNumeros = [1, 2, 3, 4, 5, 6];

  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://cdn2.skgcl.com/wp-content/uploads/2018/03/tomb-raider-2560x1440-alicia-vikander-lara-croft-2018-4k-11778.jpg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://hipertextual.com/files/2018/03/ready_player_one_steven_spielberg-1000x667.jpg'
    },

  ];

  arregloPeliculasEstrenos = [
    {
      nombre: 'Black Panther',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'https://nerdist.com/wp-content/uploads/2018/02/10763.jpg'
    },
    {
      nombre: 'Maze Runner',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'http://cdn2.gamedots.mx/media/gd/styles/gallerie/public/images/2018/01/resenamazerunnerlacuramortal.jpg'
    },
    {
      nombre: 'Star Wars',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'https://c.slashgear.com/wp-content/uploads/2017/12/star-wars-the-last-jedi-review.jpg'
    },
    {
      nombre: 'Justice League',
      descripcion: '',
      esEstreno: true,
      urlImagen: 'https://s.movie.as/images/p/466483_m1500739984.jpg'
    }
  ];
  arregloUltimasPeliculasAgregadas = [
    {
      nombre: 'Fahrenheit 451',
      descripcion: '',
      esEstreno: true,
      urlImagenA: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-iyThIuTCTK4/WwJW5ziQ43I/AAAAAAABJIA/k5IzUzG-vskZRVsmSKw1W2bXe3uVRP2LgCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'The Manor',
      descripcion: '',
      esEstreno: true,
      urlImagenA: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-ap1J6iVoaIU/WwJE5jJBw3I/AAAAAAABJHo/giinfF9qhNcL2Vn0ehk_19l14jJYba4MwCLcBGAs/s320/21.jpg'
    },
    {
      nombre: 'SherryBaby',
      urlImagenA: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://3.bp.blogspot.com/-Z3YVbb8Tg2o/WwCD7zjd1PI/AAAAAAABJG4/VoPvV8mYzv0DbcSTpE9Ver1Zcg7C3JAhQCLcBGAs/s320/21.jpg'
    },
    {
      nombre: '13 razones',
      descripcion: '',
      esEstreno: true,
      urlImagenA: 'https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&refresh=604800&url=https://image.tmdb.org/t/p/w154/yeJPtZlChYGoCVmvYIrjAeQII7R.jpg'
    }
  ];
  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }
}

