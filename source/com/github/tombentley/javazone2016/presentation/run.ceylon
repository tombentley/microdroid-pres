import ceylon.html {
    Code,
    Pre
}

import com.github.tombentley.deck {
    Presentation
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

"Generate the presentation as HTML"
shared void run() {
    print("module running");
    dynamic {
        document.title = "The most amazing Ceylon presentation you'll ever see";
        // TODO replace the div with the rendered presentation
        /*document.addEventListener("DOMContentLoaded", object {
            shared void handleEvent(dynamic event) {
                print("DOMContentLoaded");
                assert(exists slidesDiv = document.getElementById("slides"));
                slidesDiv.innerHTML = presentation.rendered;
                dynamic {
                    // ask Rainbow to do syntax highlighting
                    Rainbow.color();
                    // finally we let impress.js do its thing
                    dynamic i =  impress();
                    i.init();
                }
            }
        });
         */
        window.onload= foo;
    }
}
