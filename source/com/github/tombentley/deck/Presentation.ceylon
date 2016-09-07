import ceylon.collection {
    ArrayList
}
import ceylon.html {
    renderTemplate,
    Div
}

"A presentation, composed of [[Slide]]s. "
shared class Presentation(
    String title,
    String description,
    String author,
    {Slide|Transition*} slides) {
    
    value prepped = ArrayList<Transition->Slide>();
    variable value trans = transitions.right;
    for (s in slides) {
        if (is Slide s) {
            prepped.add(trans->s);
        } else {
            trans = s;
        }
        
    }
    
    String slideUrl(Slide s) {
        if (exists id = s.id) {
            return "#/" + id;
        } else {
            return "#step-``prepped.firstIndexWhere((slide) => slide == s) else 0``";
        }
    }
    
    shared String rendered {
        StringBuilder p = StringBuilder();
        variable value state = State();
        renderTemplate {
            write = p.append; 
            node = Div{
                id="impress";
                for (transition->slide in prepped) slide.render(state = transition(state))
            };
        };
        return p.string;
   
    }
}

