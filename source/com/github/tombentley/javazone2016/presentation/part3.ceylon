import com.github.tombentley.deck {
    Slide,
    Transition
}
import ceylon.html {
    ...
}

{Slide|Transition*} part3 = [
    Slide{
        id="part-3";
        """## A microservice using Vert.x"""
    },
    Slide{
        id="what-is-vertx";
        """### What is Vert.x?
        
           [Vert.x](http://vertx.io)
           is a toolkit for building *reactive* applications on the JVM.
           
           * Polyglot (Java, JavaSript, Ruby, Groovy and Ceylon)
           * Modular building blocks, not an app server
           * Event driven
           * Using multiple event loops to dispatch events
           * Non-blocking
           * Therefore our handlers shouldn't block the event loop
        """
    },
    Slide{
        id="adjectives";
        """### An adjective server
           
           We're going to see a microservice which returns adjectives
           (e.g. "awesome") 
           or adverbs (e.g. "awesomly") chosen randomly from a 
           hardcoded list.
           
           It will be a client of the random number service.
           
           Very similar architecture as number server, but using the vertx core
           API instead of `ceylon.http.server`."""
    },
    // Architecture slide
    // cut to vertx demo
    Slide{"### Demo"},
    Slide{
        """### Critique""",
        Ul{
            Li{"""Using the vertex core API is still quite low-level. 
                  It doesn't do any of the following:""",
                Ul{
                    Li{"Routing & path matching"},
                    Li{"Cookies, sessions"},
                    Li{"Forms & uploads"},
                    Li{"Authentication & Authorization"},
                    Li{"etc..."}
               }
           },
           Li{"the callback-based programming model won't suit everyone."},
           Li{"On the other hand, it reactive, non-blocking should scale well"}
       }
    },
    Slide{
        id="verbs";
        """### A verb server
           
           We're going to write a microservice which returns verbs chosen 
           randomly from a hardcoded list.
           
           It will also be a client of the random number service.
           
           We'll do this using vertx web, which is a higher level API built 
           on top of vertx core."""
    },
    Slide {"### Demo"},
    Slide{"""### Critique
             
             * Lots more features to play with (e.g. routing etc), and
             * a serialization library made life simpler,
             * but again the callback-based approach won't suit everyone"""}

];