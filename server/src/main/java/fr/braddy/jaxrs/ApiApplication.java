package fr.braddy.jaxrs;

import com.sopra.api.UserResource;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("api")
public class ApiApplication extends Application{
	
	 @Override
	    public Set<Class<?>> getClasses() {

	        Set<Class<?>> s = new  HashSet<Class<?>>();
	        s.add(PointsRessource.class);
	        s.add(UserResource.class);
	        return s;
	    }


}
