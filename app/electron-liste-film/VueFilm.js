class VueFilm{
  constructor(){
    this.html = document.getElementById("html-vue-film").innerHTML;
    this.film = null;
  }

  initialiserfilm(film){
    this.film = film;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("film-nom").innerHTML = this.film.nom;
    document.getElementById("film-realisateur").innerHTML = this.film.realisateur;
    document.getElementById("film-sortie").innerHTML = this.film.sortie;
    document.getElementById("film-duree").innerHTML = this.film.duree;
	document.getElementById("film-synopsis").innerHTML = this.film.synopsis;
  }

}
