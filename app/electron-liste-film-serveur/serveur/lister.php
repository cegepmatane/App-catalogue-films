<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$listeFilmJson = file_get_contents("liste-film.json");

if(strlen($listeFilmJson) > 0){
  $listeFilm = json_decode($listeFilmJson);
  echo json_encode($listeFilm);
}else{
  echo json_encode([]);
}