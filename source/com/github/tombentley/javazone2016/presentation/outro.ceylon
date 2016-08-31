import ceylon.html {
    Img,
    H3
}
import com.github.tombentley.deck {
    Slide
}
{Slide*} outro => {
    Slide {
        id="architecture";
        H3{"What have we seen again?"},
        Img{src="architecture.svg"; width=780;},
        """... using Eclipse, IntelliJ, Android Studio, the CLI"""
    },
    Slide {
        """### What haven't we seen?
           
           There's **loads** of stuff I've not had time to talk about. 
           Including (but not limited to): JS, 
           Mobile development with Cordova,
           the module system, the metamodel, 
           interop with Java/JEE, the Herd, 
           interop with TypeScript...
           
           Check out
           
           * [http://ceylon-lang.org](http://ceylon-lang.org)
           * [https://gitter.im/ceylon/user](https://gitter.im/ceylon/user)
           * [https://groups.google.com/group/ceylon-users](https://groups.google.com/group/ceylon-users)
           
           if you're interested!
           """
    },
    Slide{
        id="fin";
        """# The End
           
           Questions?"""
    }
};