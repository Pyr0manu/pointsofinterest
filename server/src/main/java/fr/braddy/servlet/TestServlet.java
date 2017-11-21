package fr.braddy.servlet;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import fr.braddy.EJB.PointsEtCategorieEJB;

@WebServlet("/test")
public class TestServlet extends HttpServlet{
	
	@EJB
	private PointsEtCategorieEJB pointsEtCategorieEJB;
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		pointsEtCategorieEJB.creerPointTest(1);
		resp.getOutputStream().print("yo");
	}

}
