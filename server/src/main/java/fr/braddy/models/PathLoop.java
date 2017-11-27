package fr.braddy.models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PathLoop {
    Point[] etapes;
    Point depart;

    public Point[] getEtapes() {
        return etapes;
    }

    public Point getDepart() {
        return depart;
    }
}
