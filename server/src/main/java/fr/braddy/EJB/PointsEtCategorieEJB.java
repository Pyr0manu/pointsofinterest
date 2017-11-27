package fr.braddy.EJB;
import java.util.List;
import java.util.InputMismatchException;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import fr.braddy.models.Categorie;
import fr.braddy.models.Point;
import fr.braddy.models.TSPNearestNeighbour;

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
	
	public void creerPointTest(double [][] table) {
		for(double[] coordonnee : table){
			Point point = new Point();
			point.setNom("testJaxrs");
			point.setAddress("testJaxrs");
			point.setLatitude(coordonnee[0]);
			point.setLongitude(coordonnee[1]);
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

	//Retourne la distance entre deux points, en kilomètres
	public double calculDistance(Point p1, Point p2){
		return Math.sqrt(
						Math.pow(p1.getLatitude() - p2.getLatitude(), 2)
				+
						Math.pow(p1.getLongitude() - p2.getLongitude(), 2)
		)*100;
	}

	//Ordonne la liste de points de manière à obtenir un trajet optimisé
	public Point[] calculItineraire(Point depart, Point[] etapes) {

		// Nodes est la liste complete des points à visiter
		Point[] nodes = new Point[etapes.length + 1];
		int index = 0;
		nodes[index] = depart;
		index++;
		for (Point current : etapes) {
			nodes[index] = current;
			index++;
		}

		int number_of_nodes;

		// On ne compte pas le point de départ
		number_of_nodes = nodes.length - 1;

		//Creation de la matrice des distances, la trace est forcément nulle
		double adjacency_matrix[][] = new double[number_of_nodes + 1][number_of_nodes + 1];
		for (int i = 0; i <= number_of_nodes; i++) {
			for (int j = 0; j <= number_of_nodes; j++) {
				adjacency_matrix[i][j] = calculDistance(nodes[i], nodes[j]);
			}
		}

		TSPNearestNeighbour tspNearestNeighbour = new TSPNearestNeighbour();
		List<Integer> orderList = tspNearestNeighbour.tsp(adjacency_matrix);
		Point[] itineraire = new Point[number_of_nodes + 1];
		int i = 0;
		for (Integer current : orderList) {
			itineraire[i] = nodes[current - 1];
			i++;
		}
		return itineraire;
	}
}