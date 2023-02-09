console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
  const postdata = querystring.parse(event.body);
  
  let film = null;
  let filmjson = postdata["filmjson"];
  if(filmjson){
    film = JSON.parse(filmjson);
  }
  
  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body : "Pas de film reçu",
  };
  
  if (film == null) {
    return response;
  }

  film.id = Date.now();

  const params = {
      Bucket: "app-film",
      Key: "liste-film.json",
  };

  let data = await s3.getObject(params).promise();
  let listeFilmJson = data.Body.toString('utf-8');
  const listeFilm = JSON.parse(listeFilmJson);
  listeFilm.push(film);
  listeFilmJson = JSON.stringify(listeFilm);
  params.Body  = listeFilmJson;
  data = await s3.putObject(params).promise();

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: film.id
  };

  return response;
};