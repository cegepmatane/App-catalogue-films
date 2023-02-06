class FilmDAO{
  constructor(){
    let listeFilmMemoire = [new Film("Auto téléguidée", "Tesla", "12/02/2020", "60min", "Petite voiture pour faire rêver", 0),
                              new Film("Montre intelligente", "Neo Pebble", "12/02/2020", "60min", "Une vraie montre intelligente open source", 1),
                              new Film("Lunette de réalité augmentée", "Seer Glasses", "12/02/2020", "60min", "Des lunettes qui me montrent l'invisible", 2)];

    localStorage['film'] = JSON.stringify(listeFilmMemoire);
    this.listeFilm = [];
  }

  lister(){
    this.listeFilm = [];
    let listeFilmMemoire = [];
    if(localStorage['film']){
      listeFilmMemoire = JSON.parse(localStorage['film']);
    }

    for(let position in listeFilmMemoire){
      let film = new Film(listeFilmMemoire[position].nom,
                              listeFilmMemoire[position].realisateur,
							  listeFilmMemoire[position].sortie,
							  listeFilmMemoire[position].duree,
							  listeFilmMemoire[position].synopsis,
                              listeFilmMemoire[position].id);

      this.listeFilm.push(film);
    }

    return this.listeFilm;

  }

  chercher(id){
    this.lister();
    return this.listeFilm.find(film => film.id === id);
  }

}
