package fr.braddy.EJB;


import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import fr.braddy.models.Categorie;
import fr.braddy.models.Point;


@Stateless
public class PointsEtCategorieEJB {

    @PersistenceContext
    EntityManager em;

    public Categorie creerCategorie(Categorie categorie){  em.persist(categorie); return categorie;}

    public void creerCategorietest(String[] tab) {
        for (String current : tab) {
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

    public void creerPointTest(double[][] table) {
        for (double[] coordonnee : table) {
            Point point = new Point();
            point.setNom("testJaxrs");
            point.setAddress("testJaxrs");
            point.setLatitude(coordonnee[0]);
            point.setLongitude(coordonnee[1]);
            em.persist(point);
        }

    }


    public Point ajouterPoint(Point point) {
        /*Query query = em.createQuery("SELECT p FROM Point p WHERE p.nom LIKE :nom AND p.longitude LIKE :long AND p.latitude LIKE :lat", Point.class)
                .setParameter("nom", point.getNom())
                .setParameter("long", point.getLongitude())
                .setParameter("lat", point.getLatitude());
        Point pointExistant = new Point();
        try {
            pointExistant = (Point) query.getSingleResult();
        } catch (Exception e) {
            pointExistant = null;
        }
        if (pointExistant == null) {*/

        em.persist(point);
        return point;

        /*} else {
            return null;
        }*/


    }

    public Point modifierPoint(Point point) {
        return em.merge(point);
    }

    public Point trouverPoint(int id) {
        return em.find(Point.class, id);
    }

    public void supprimerPoint(int id) {
        em.remove(em.find(Point.class, id));
    }


    public List<Point> findAllPoint() {
        TypedQuery<Point> query = em.createQuery("from " + Point.class.getSimpleName(), Point.class);
        return query.getResultList();

    }

    public List<Point> recherchePoint(String motClef, String choixColonne) {
        if (choixColonne.equals("categorie")) {
            TypedQuery<Point> query = em.createQuery("SELECT p FROM Point p join p.categorie c WHERE c.nom LIKE :motClef", Point.class)
                    .setParameter("motClef", "%" + motClef + "%");
            return query.getResultList();
        } else {

            TypedQuery<Point> query = em.createQuery("SELECT p FROM Point p WHERE p." + choixColonne + " LIKE :motClef", Point.class)
                    .setParameter("motClef", "%" + motClef + "%");
            return query.getResultList();
        }
    }
}
