import ceylon.html {
    Code,
    Pre
}

import com.github.tombentley.deck {
    Presentation
}
import ceylon.interop.browser.dom {
    document,
    EventListener,
    Event
}

"Put the given string inside <pre><code>"
Pre code(String text)
        => Pre{clazz="code ceylon";
    Code {
        attributes=["data-language"->"ceylon"];
        text
    }
};

"The presentation"
Presentation presentation =>
    Presentation { 
        title = "The most amazing Ceylon presentation you'll ever see"; 
        description = "A presentation about the Ceylon programing language 
                       and how it can be used to write microservices and 
                       Android applications"; 
        author = "Tom Bentley"; 
        slides = intro.chain(part1).chain(part2).chain(part3).chain(part4).chain(part5).chain(outro); 
    };

    
shared void foo() {
    dynamic{
        console.log("DOMContentLoaded");
    }
}

void setup() {
    assert(exists slidesDiv = document.getElementById("slides"));
    slidesDiv.innerHTML = presentation.rendered;
    print("Set inner html");
    dynamic {
        // ask Rainbow to do syntax highlighting
        //Rainbow.color();
        // finally we let impress.js do its thing
        dynamic i =  impress();
        i.init();
    }
}

"Generate the presentation as HTML"
shared void run() {
    print("module running");
    document.title = "The most amazing Ceylon presentation you'll ever see";
    print("title set");
    if (document.readyState == "complete"
            || document.readyState == "loaded"
            || document.readyState == "interactive") {
        setup();
    } else {
        document.addEventListener("DOMContentLoaded", object satisfies EventListener {
            shared actual void handleEvent(Event event) {
                setup();
            }
        });
    }
    
    print("/run");
    /*
    dynamic {
        document.title = "The most amazing Ceylon presentation you'll ever see";
        // TODO replace the div with the rendered presentation
        /*
         */
        window.onload= foo;
    }*/
}
