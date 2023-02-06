class Application {
  constructor(window, vueListeFilm, vueFilm, vueAjouterFilm, filmDAO){

    this.window = window;

    this.vueListeFilm = vueListeFilm;

    this.vueFilm = vueFilm;

    this.vueAjouterFilm = vueAjouterFilm;
    // C'est l'équivalent de function(film){this.ajouterFilm(film)}
    this.vueAjouterFilm.initialiserAjouterFilm(film =>this.ajouterFilm(film));

    this.filmDAO = filmDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.filmDAO.lister((listeFilm) => this.afficherNouvelleListeFilm(listeFilm));

    }else if(hash.match(/^#ajouter-film/)){

      this.vueAjouterFilm.afficher();

    }else{

      let navigation = hash.match(/^#film\/([0-9]+)/);
      let idFilm = navigation[1];

      this.filmDAO.chercher(idFilm, (film) => this.afficherNouveauFilm(film));
    }
  }

  afficherNouvelleListeFilm(listeFilm){

    console.log(listeFilm);
    this.vueListeFilm.initialiserListeFilm(listeFilm);
    this.vueListeFilm.afficher();
  }

  afficherNouveauFilm(film){
    console.log(film);
    this.vueFilm.initialiserFilm(film);
    this.vueFilm.afficher();
  }

  ajouterFilm(film){
    this.filmDAO.ajouter(film, () => this.afficherListeFilm());
  }

  afficherListeFilm(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListeFilm(), new VueFilm(), new VueAjouterFilm(), new FilmDAO());

