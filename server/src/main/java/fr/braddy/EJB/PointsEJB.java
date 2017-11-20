package fr.braddy.EJB;



import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import fr.braddy.models.Point;




@Stateless
public class PointsEJB {
	
	@PersistenceContext
	EntityManager em;
	
	public Point  creerPointTest() {
		Point point = new Point();
		point.setNom("testJaxrs");
		point.setAddress("testJaxrs");
		point.setDescription("testJaxrs");
		point.setType("testJaxrs");
		point.setLatitude(123456789);
		point.setLongitude(123456789);
		em.persist(point);
		return point;
	
	}
	
	public Point ajouterPoint(Point point) {
		em.persist(point);
		return point;
		
	}
	
	public Point modifierPoint(Point point) {
		return em.merge(point);
	}
	
	public void supprimerPoint(int id) {
		em.remove(em.find(Point.class, id));
	}
	
	public List<Point> findAllPoint() {
		TypedQuery<Point> query = em.createQuery("from " + Point.class.getSimpleName(), Point.class);
		return query.getResultList();

	}
}
