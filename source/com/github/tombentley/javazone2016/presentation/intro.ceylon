import ceylon.html {
    P,
    Ul,
    H2,
    Li,
    H3,
    H1
}
import com.github.tombentley.deck {
    Slide,
    transitions,
    Transition
}

{Slide|Transition*} intro => {
    Slide{
        id="title";
        H2{"The most incredible Ceylon presentation you'll ever see"},
        H3{"Tom Bentley"},
        H3{"Javazone, Oslo, September 2016"}
        
    },
    transitions.down,
    Slide{
        id="ceylon-is";
        """### Ceylon
           
           Ceylon
           
           * is a modern type-safe programming language which runs on 
             Java and JavaScript virtual machines,
           * is also a modular platform with its own SDK,
           * is supported by discoverable CLI tools,
           * has a mature Eclipse IDE,
           * has an awesome new IntelliJ IDE,
           * is well-suited to developing microservices, and
           * is Android-enabled
           """
    }
};