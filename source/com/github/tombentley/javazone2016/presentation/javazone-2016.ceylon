import ceylon.html {
    Code,
    Pre
}

import com.github.tombentley.deck {
    Presentation,
    write
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
        slides = intro.chain(part1).chain(part2).chain(part3).chain(part4).chain(outro); 
    };

"Generate the presentation as HTML"
shared void run() {
    //serve(presentation);
    write(presentation);
}