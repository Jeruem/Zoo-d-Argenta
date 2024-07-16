import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Le_restaurant", "Notre restaurant", "/pages/Le_restaurant.html"),
    new Route("/Les_animaux", "Les animaux", "/pages/Les_animaux.html"),
    new Route("/Savane", "La savane", "/pages/Savane.html"),
    new Route("/Marais", "Les marais", "/pages/Marais.html"),
    new Route("/Jungle", "La jungle", "/pages/Jungle.html"),
    new Route("/BiomeSavane1", "Zone 1", "/pages/BiomeSavane1.html"),
    new Route("/BiomeSavane2", "Zone 2", "/pages/BiomeSavane2.html"),
    new Route("/BiomeSavane3", "Zone 3", "/pages/BiomeSavane3.html"),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo d'Argenta";