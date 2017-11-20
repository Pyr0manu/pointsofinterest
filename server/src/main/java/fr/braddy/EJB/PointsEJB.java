package fr.braddy.EJB;



import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import fr.braddy.models.Points;

@Stateless
public class PointsEJB {
	
	@PersistenceContext
	EntityManager em;
	
	public void  creerPointTest() {
		Points points = new Points();
		points.setNom("test");
		em.persist(points);
		
	}
}
