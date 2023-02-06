class FilmDAO{
  constructor(){
    this.URL = 'http://localhost/serveur/'
  }

  lister(action){
    fetch(this.URL + 'lister.php')
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let listeFilm = [];
          for(let position in data){
            let film = new Film(data[position].nom,
                                    data[position].realisateur,
                                    data[position].synopsis,
									data[position].sortie,
									data[position].duree,
                                    data[position].id);

            console.log(film);
            listeFilm.push(film);
          }
          action(listeFilm);
        });
  }

  chercher(id, action){
    fetch(this.URL + 'chercher-par-id.php' + '?id=' + id)
      .then(response => response.json())
      .then(data =>
        {
          console.log(data);
          let film = new Film(data.nom,
                                  data.realisateur,
                                  data.synopsis,
								  data.sortie,
								  data.duree,
                                  data.id);
          action(film);
        });
  }

  ajouter(film, action){
    fetch(this.URL + 'ajouter.php',
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(film),
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }

}