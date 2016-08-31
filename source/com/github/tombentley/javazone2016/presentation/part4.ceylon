import com.github.tombentley.deck {
    Slide,
    Transition
}
import ceylon.html {
    P,
    H2
}

{Slide|Transition*} part4 = [
    Slide{
        id="part-4";
        H2{"A microservice using gyokuro"},
        P{clazz="small"; "(20 minutes)"}
    },
    Slide {
        """### A Rendering Service
           
           We're going to look at another (final, phew!) microservice
           which renders templates by inserting verbs and adjectives, 
           returning a list of phrases/sentences.
           
           It will be a client of all three other services.
           
           It is implemented using gyokuro (which is built on top 
           of `ceylon.http.server`).
           """
    },
    Slide {
        """### Demo"""
    },
    Slide{
        """### Critique
           
           * More traditional, Java-like, annotation-based approach
           * Framework supports 'transformers' (for serialization OOTB)
           * And support for popular templating libraries
           """
    },
    Slide {
        """### Question
           
           So how is this 
           
           > the most incredible Ceylon presentation you'll ever see?
           
           """
    }
];

{Slide|Transition*} part5 = [
    Slide{
        id="part-5";
        """### An Android app
           
           *We've now seen several different ways to write microservices 
           in Ceylon.
           
           * Ceylon supports Android development from Ceylon 1.3.
           * So let's look at an Android client for this stuff!
        """
    },
    Slide{
        """### Aside: Cordova
           
           * It's possible to develop 
             mobile applications using Apache Cordova and
             Ceylon JS,
           * Like any Cordova-based app, that would let you target
             iOS and WindowsPhone as well as Android
           * But let's focus on *native Android*..."""
    },
    Slide{
        """### Native Android Development
           
           How do you develop for Android using Ceylon?
           
           * You install the Ceylon plugin into Android Studio,
           * it intregrates via a gradle plugin into the build 
             used by Android Studio
           * and transparently packages the Ceylon runtime and all your 
             module's transitive dependencies into your app. 
           * The ceylon metamodel is suppored statically, 
             (avoiding lots of reflection) and it initialized at runtime.
           
           """
    },
    Slide {"### Demo"},
    Slide {
        """### Future plans for Android development
           
           In the next version of Ceylon we aim to improve Android interop:
           
           * SAM-type conversion,
           * CharSequence conversion,
           * maybe even some kind of DSL of the Android SDK"""
    }
    /*
     that it comes with 1.3.0, that it runs natively (though you can still use cordova), 
     is supported in the intellij ceylon ide, that it uses a gradle plugin (though it's pretty obvious for anyone running android) 
     and that the next version of ceylon will feature even more 
     support for android by making it easier to interop with it
     things like SAM/CharSequence conversion, or auto-DSL of the Android SDK
     
     */
];