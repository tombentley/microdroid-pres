import com.github.tombentley.deck {
    Slide,
    Transition
}

{Slide|Transition*} part4 = [
    Slide{
        id="part-4";
        """## A microservice using gyokuro"""
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
        """### A Confession
           
           So how is this 
           
           > The most incredible Ceylon presentation you'll ever see?
           
           Well, it could equally be
           
           > How Ceylon helped me lose 2kg in 3 weeks
           
           Or
           
           > 3 things your husband doesn't want you to know about Ceylon
           
           Because we're building a click bait generator here.
           
           """
    }
];
