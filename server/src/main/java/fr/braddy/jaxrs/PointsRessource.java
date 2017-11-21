package fr.braddy.jaxrs;

import java.util.List;

import javax.ejb.EJB;
import javax.websocket.server.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.braddy.EJB.PointsEJB;
import fr.braddy.models.Point;

@Path("points")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PointsRessource {
	
	@EJB
	private PointsEJB pointEJB;
	
//	@GET
//    public Point testPoint(){return pointEJB.creerPointTest();}
	
	@GET
	public List<Point> afficherListPoint(){
		return pointEJB.findAllPoint();
	}
	
	@POST
	public Point creationPoint(Point point){
		return pointEJB.ajouterPoint(point);
	}
	
	@PUT
	public Point modifierPoint(Point point){
		return pointEJB.modifierPoint(point);
		
	}

	@DELETE
	@Path("{id}")
	public void supprimerPoint (@PathParam("id") int id) {
		System.out.println(id);
		pointEJB.supprimerPoint(id);
	}
	

}
