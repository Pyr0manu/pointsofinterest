package fr.braddy.EJB;



import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import fr.braddy.models.Categorie;
import fr.braddy.models.Point;




@Stateless
public class PointsEtCategorieEJB {
	
	@PersistenceContext
	EntityManager em;
	
	
	public void  creerCategorie(String[] tab) {
		for(String current : tab){
			Categorie categorie = new Categorie();
			categorie.setNom(current);
			em.persist(categorie);
		}
		
	}
	
	public List<Categorie> findAllCategorie() {
		TypedQuery<Categorie> query = em.createQuery("from " + Categorie.class.getSimpleName(), Categorie.class);
		System.out.println(query.getResultList().size());
		return query.getResultList();

	}
	
	public void creerPointTest(int number) {
		for(int i =0 ; i < number ; i++){
		Point point = new Point();
		point.setNom("testJaxrs");
		point.setAddress("testJaxrs");
		point.setLatitude(123456789);
		point.setLongitude(123456789);
		em.persist(point);
		}
	
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
