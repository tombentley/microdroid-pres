import com.github.tombentley.deck {
    Slide,
    Transition
}
import ceylon.html {
    P,
    H2,
    H3,
    A
}

{Slide|Transition*} part2 = [
    Slide{
        id="part-2";
        H2{"A microservice using ceylon.http.server"},
        P{clazz="small"; "(10 minutes)"}
    },
    Slide {
        id="enough";
        H3{"Just enough"},
        P{"We've covered enough of the language that you should be able 
           to understand most of the code you're going to see."},
        P{"But there's a lot more to Ceylon than just the language, so now 
           you're going to see some of the SDK, IDE and CLI tools."}
    },
    Slide{
        id="number-api";
        H3{"The API"},
        """We're going to create a very simple microservice for exposing 
           a random number generator.
           
           Clients will make `GET` requests to""",
        code("http://localhost:8081/numbers/number?min={min}&max={max}"),
        """And will receive a text/plain response containing the number.""",
        P{A{href="http://localhost:8081/numbers/number?min=0&max=10";
            "http://localhost:8081/numbers/number?min=0&max=10"}}
        
     }
];