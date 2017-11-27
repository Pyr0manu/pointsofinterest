package fr.braddy.jaxrs;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.braddy.EJB.PointsEtCategorieEJB;
import fr.braddy.models.Categorie;
import fr.braddy.models.PathLoop;
import fr.braddy.models.Point;

@Path("points")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PointsRessource {
	
	@EJB
	private PointsEtCategorieEJB pointsEtCategorieEJB;
	
	@GET
	@Path("init")
	public String testPoint(){
		String[] tab = {"restaurants", "musées", "points de vue","monuments historique", "Oeuvres d'art" };
		double[][] tab2 = {{43.566810, 1.466468},{48.868550, 2.355298},{46.250716, 4.171884}, {46.531672, 0.122416}};
		pointsEtCategorieEJB.creerCategorie(tab);
		pointsEtCategorieEJB.creerPointTest(tab2);
		return "init ok";
	}
	
	@GET
	@Path("categories")
	public List<Categorie> afficherListCategorie (){
		return pointsEtCategorieEJB.findAllCategorie();
	}
	
	@GET
	@Path("search/{motClef}/{choixColonne}")
	public List<Point> rechercherListPoint(@PathParam("motClef") String motClef,@PathParam("choixColonne") String choixColonne ){
		return pointsEtCategorieEJB.recherchePoint(motClef, choixColonne);
	}

	@GET
	public List<Point> afficherListPoint(){
		return pointsEtCategorieEJB.findAllPoint();
	}
	
	@POST
	public Point creationPoint(Point point){
		return pointsEtCategorieEJB.ajouterPoint(point);
	}
	
	@PUT
	public Point modifierPoint(Point point){
		return pointsEtCategorieEJB.modifierPoint(point);
	}

	@DELETE
	@Path("{id}")
	public void supprimerPoint (@PathParam("id") int id) {
		pointsEtCategorieEJB.supprimerPoint(id);
	}

	@POST
	@Path("itineraire")
	public Point[] calculItineraire(PathLoop pathLoop){
		return pointsEtCategorieEJB.calculItineraire(pathLoop.getDepart(), pathLoop.getEtapes());
	}


}
