package fr.braddy.jaxrs;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import fr.braddy.EJB.PointsEJB;
import fr.braddy.models.Point;

@Path("point")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PointsRessource {
	
	@EJB
	private PointsEJB pointEJB;
	
	@GET
    public Point testPoint(){
		return pointEJB.creerPointTest();
		
    }

}
