import ceylon.html {
    P,
    A
}

import com.github.tombentley.deck {
    Slide,
    Transition
}

{Slide|Transition*} part2 = [
    Slide{
        id="part-2";
        """## A microservice using `ceylon.http.server`"""
    },
    //Slide {
    //    id="number-arch";
    //    H3{"Architecture"},
    //    Img{src="number-service.svg";}
    //},
    Slide{
        id="number-api";
        """### A number service
           
           * We're going to look at a very simple microservice for exposing 
             a random number generator.
           
           *  Clients will make `GET` requests to
            
           ```plain
           http://localhost:8081/numbers/number?min={min}&max={max}
           ```
           
           * They will receive a response containing a random integer
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