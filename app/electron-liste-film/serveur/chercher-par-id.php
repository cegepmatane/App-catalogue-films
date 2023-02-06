<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];
$listeFilmJson = file_get_contents("liste-film.json");

if(strlen($listeFilmJson) > 0){
  $listeFilm = json_decode($listeFilmJson);
  foreach($listeFilm as $film) {
      if ($id == $film->id) {
          echo json_encode($film);
          die();
      }
  }
}
echo json_encode([]);

