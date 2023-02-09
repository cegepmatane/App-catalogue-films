class FilmDAO{

  lister(action){
    fetch('https://5fgvlhcqsh.execute-api.us-east-1.amazonaws.com/default/lister', {mode:'cors'})
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
    fetch('https://6vjb7phlx7.execute-api.us-east-1.amazonaws.com/default/chercher-par-id' + '?id=' + id, {mode:'cors'})
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
    fetch('https://1he04xrxca.execute-api.us-east-1.amazonaws.com/default/ajouter',
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: "filmjson=" + JSON.stringify(film),
        mode:'cors',
      })
      .then(response => response.text())
      .then(data =>
        {
          console.log('Détail:', data);
          action();
        });
  }

}