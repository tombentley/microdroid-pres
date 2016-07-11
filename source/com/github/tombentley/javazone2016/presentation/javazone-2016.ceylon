import ceylon.collection {
    ArrayList
}
import ceylon.html {
    P,
    Ul,
    Code,
    Li,
    H3,
    H1,
    Pre,
    H2
}
import com.github.tombentley.deck {
    Slide,
    Presentation,
    transitions,
    serve,
    Transition
}

"Put the given string inside <pre><code>"
Pre code(String text)
        => Pre{clazz="code ceylon";
    Code {
        attributes=["data-language"->"ceylon"];
        text
    }
};

Presentation presentation {
    value slides = ArrayList<Slide|Transition>();
    slides.addAll{
        Slide{
            id="title";
            speakerNotes = "Introduce self and relationship to project";
            H2{"The most incredible Ceylon presentation you'll ever see"},
            H3{"Tom Bentley"},
            H3{"Javazone, Oslo, September 2016"}
            
        },
        transitions.down,//insideCubeY,
        Slide{
            speakerNotes = "Project start 2011. It's a platform";
            H1{"Ceylon"},
            P{"Ceylon is"},
            Ul{
                Li{"A modern type safe programming language which runs on Java and JavaScript virtual machines"},
                Li{"A modular platform with its own SDK"},
                Li{"supported by a discoverable CLI and full-featured IDEs"},
                Li{"well suited to developing microservices"},
                Li{"Android-enabled"}
            }
        }
    };
    slides.addAll(part1.chain(part2).chain(part3).chain(part4));
    slides.addAll{
        Slide{
            speakerNotes = "Thankyou and goodnight";
            id="fin";
            H2{"Fin"},
            P{clazz="small"; "(the rest of your life)"},
            P{"Questions"}
        }
    };
    
    return Presentation { 
        title = "The most amazing Ceylon presentation you'll ever see"; 
        description = "A presentation about the Ceylon programing language 
                       and how it can be used to write microservices and 
                       Android applications"; 
        author = "Tom Bentley"; 
        slides = slides; 
    };
}
shared void run() {
    serve(presentation);
}