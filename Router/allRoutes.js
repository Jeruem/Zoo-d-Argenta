import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/général/home.html", []),
    new Route("/Lerestaurant", "Notre restaurant", "/pages/général/Lerestaurant.html", []),
    new Route("/Les_animaux", "Les animaux", "/pages/Les_animaux.html", []),
    new Route("/Savane", "La savane", "/pages/Savane/Savane.html", []),
    new Route("/Marais", "Les marais", "/pages/Marais/Marais.html", []),
    new Route("/Jungle", "La jungle", "/pages/Jungle/Jungle.html", []),
    new Route("/Connexion", "Page de connexion utilisateur", "/pages/auth/Connexion.html", ["disconnected", "admin", "veterinaire", "employe"], "/js/connexion.js" ),
    new Route("/Moncompte", "Mon compte", "/pages/auth/Moncompte.html", ["admin", "employe"]),
    new Route("/editpassword", "Modification du mot de passe", "/pages/auth/editpassword.html", ["admin", "employe", "veterinaire"]),
    new Route("/BiomeSavane1", "Zone A", "/pages/Savane/BiomeSavane1.html", []),
    new Route("/BiomeSavane2", "Zone B", "/pages/Savane/BiomeSavane2.html", []),
    new Route("/BiomeSavane3", "Zone C", "/pages/Savane/BiomeSavane3.html", []),
    new Route("/BiomeMarais1", "Zone D", "/pages/Marais/BiomeMarais1.html", []),
    new Route("/BiomeMarais2", "Zone E", "/pages/Marais/BiomeMarais2.html", []),
    new Route("/BiomeJungle1", "Zone F", "/pages/Jungle/BiomeJungle1.html", []),
    new Route("/BiomeJungle2", "Zone G", "/pages/Jungle/BiomeJungle2.html", []),
    
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo d'Argenta";