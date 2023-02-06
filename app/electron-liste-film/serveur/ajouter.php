<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$filmJSON = file_get_contents('php://input');
$film= json_decode( $filmJSON );
print_r($film);

$listeFilm = [];
$listeFilmJson = file_get_contents("liste-film.json");

if(strlen($listeFilmJson) > 0){
  $listeFilm = json_decode($listeFilmJson);
  $nombreFilm = count($listeFilm);

  $film->id = $nombreFilm;
  array_push($listeFilm, $film);
  print_r($listeFilm);
}

$listeFilmJson = json_encode($listeFilm);

/* Linux
sudo chgrp www-data liste-film.json
sudo chmod g+w liste-film.json
*/

file_put_contents("liste-film.json", $listeFilmJson);
