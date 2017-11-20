package fr.braddy.EJB;



import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import fr.braddy.models.Point;


@Stateless
public class PointsEJB {
	
	@PersistenceContext
	EntityManager em;
	
	public Point  creerPointTest() {
		Point point = new Point();
		point.setNom("testJaxrs");
		em.persist(point);
		return point;
		
	}
}
