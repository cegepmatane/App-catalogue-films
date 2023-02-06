class VueAjouterFilm{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-film").innerHTML;
    this.ajouterFilm = null;
  }

  initialiserAjouterFilm(ajouterFilm){
    this.ajouterFilm = ajouterFilm;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let nom = document.getElementById("film-nom").value;
    let realisateur = document.getElementById("film-realisateur").value;
    let synopsis = document.getElementById("film-synopsis").value;
	let sortie = document.getElementById("film-sortie").value;
	let duree = document.getElementById("film-duree").value;

    this.ajouterFilm(new Film(nom, realisateur, synopsis, sortie, duree, null));

  }

}