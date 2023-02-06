class VueListeFilm{class
  constructor(){
    this.html = document.getElementById("html-vue-liste-film").innerHTML;
    this.listeFilmDonnee = null;
  }

  initialiserListefilm(listeFilmDonnee){
    this.listeFilmDonnee = listeFilmDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listeFilm = document.getElementById("liste-film");
    const listeFilmItemHTML = listeFilm.innerHTML;
    let listeFilmHTMLRemplacement = "";

    for(var numeroFilm in this.listeFilmDonnee){
      let listeFilmItemHTMLRemplacement = listeFilmItemHTML;
      listeFilmItemHTMLRemplacement = listeFilmItemHTMLRemplacement.replace("{Film.id}",this.listeFilmDonnee[numeroFilm].id);
      listeFilmItemHTMLRemplacement = listeFilmItemHTMLRemplacement.replace("{Film.nom}",this.listeFilmDonnee[numeroFilm].nom);
      listeFilmHTMLRemplacement += listeFilmItemHTMLRemplacement;
    }

    listeFilm.innerHTML = listeFilmHTMLRemplacement;
  }

}
