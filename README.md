# projet-catalogue-films

Un projet de Benjamin Mouëza, Yann Mijatovic, Zhi-Sheng Trieu  

Il s'agit d'un projet infonuagique dans lequel nous developpons une application Electron qui permet de consulter et gérer un catalogue de films. 

Nous pouvons :
- ajouter
- consulter
un film qui est contenu dans un fichier json. Ceci est possible grâce à fonction Lambda de AWS dont les script sont codés en NodeJS.
L'application utilise les API Gateway de AWS pour manipuler la liste de film.

# API GATEWAY

Yann :
 - ajouter : https://7qq7yg1xbf.execute-api.us-east-1.amazonaws.com/default/ajouter
 - lister : https://qf91dyvn1d.execute-api.us-east-1.amazonaws.com/default/lister
 - chercher-par-id : https://97ggn92mfj.execute-api.us-east-1.amazonaws.com/default/chercher-par-id
 
Zhi-Sheng :
 - ajouter : https://nb0yefb8cj.execute-api.us-east-1.amazonaws.com/default/ajouter
 - lister : https://2f5xmaty9k.execute-api.us-east-1.amazonaws.com/default/lister
 - chercher-par-id : https://lmuj7ra4ga.execute-api.us-east-1.amazonaws.com/default/chercher-par-id

Benjamin :  
 - ajouter : https://1he04xrxca.execute-api.us-east-1.amazonaws.com/default/ajouter  
 - lister :  https://5fgvlhcqsh.execute-api.us-east-1.amazonaws.com/default/lister  
 - chercher-par-id : https://6vjb7phlx7.execute-api.us-east-1.amazonaws.com/default/chercher-par-id  
 