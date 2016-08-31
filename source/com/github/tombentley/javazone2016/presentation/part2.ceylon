import com.github.tombentley.deck {
    Slide,
    Transition
}
import ceylon.html {
    P,
    H2,
    H3,
    A,
    Ul,
    Li,
    Img
}

{Slide|Transition*} part2 = [
    Slide{
        id="part-2";
        """## A microservice using ceylon.http.server
        
           (10 minutes)
        """
    },
    Slide {
        id="enough";
        """### Just enough
           
           There's a lot more to Ceylon than just the language, so now 
           you're going to see some of the SDK, IDE and CLI tools.
           
           We've covered enough of the language that you should be able 
           to understand *most* of the code you're going to see.
        """
    },
    //Slide {
    //    id="number-arch";
    //    H3{"Architecture"},
    //    Img{src="number-service.svg";}
    //},
    Slide{
        id="number-api";
        """### A number service
           
           We're going to look at a very simple microservice for exposing 
           a random number generator.
           
           Clients will make `GET` requests to
            
               http://localhost:8081/numbers/number?min={min}&max={max}
               
           And will receive a text/plain response containing a random integer
           between `min` and `max` (inclusive).
        """,
        P{A{href="http://localhost:8081/numbers/number?min=0&max=10";
            "http://localhost:8081/numbers/number?min=0&max=10"}}
        
     },
     Slide {
         """### Implementation
            
            * We're going to use `ceylon.http.server`, part of the Ceylon SDK
            * `ceylon.http.server` uses undertow and xnio under the covers
            """
     },
     Slide {"### Demo"},
     Slide{
         """### Critique
            Criticisms of the number service:
            
             * The `ceylon.http.server` API is quite low level, 
               (e.g. had to write convenience method for getting parameters)
             * its requirements are simple enough that it doesn't have to solve a 
               serialization problem
             * It works!
             """
     }
];