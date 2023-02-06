class Application {
  constructor(window, vueListeFilm, vueFilm, filmDAO){

    this.window = window;

    this.vueListeFilm = vueListeFilm;

    this.vueFilm = vueFilm;

    this.filmDAO = filmDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeFilm.initialiserListeFilm(this.filmDAO.lister());
      this.vueListeFilm.afficher();

    }else{

      let navigation = hash.match(/^#film\/([0-9]+)/);
      let idFilm = navigation[1];

      let film = this.filmDAO.chercher(parseInt(idFilm))
      this.vueFilm.initialiserFilm(film);
      this.vueFilm.afficher();

    }
  }

}

new Application(window, new VueListeFilm(), new VueFilm(), new FilmDAO());

