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
        H2{"A microservice using Vert.x"},
        P{clazz="small"; "(15 minutes)"}
    },
    Slide{
        id="what-is-vertx";
        H3{"What is Vert.x?"},
        A{href="http://vertx.io"; "Vert.x"},
        """ is a toolkit for building reactive applications on the JVM.""",
        Ul{
            Li{"Polyglot (Java, JavaSript, Ruby, Groovy and Ceylon"},
            Li{"Modular building blocks, not an app server"},
            Li{"Event driven"},
            Li{"Using multiple event loops to dispatch events"},
            Li{"Non-blocking"},
            Li{"=> Our handlers shouldn't block the event loop"}
        }
    }

];