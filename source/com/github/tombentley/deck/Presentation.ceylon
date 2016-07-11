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
    
    shared void render(Anything(String) p=process.write) {
        p("<!doctype html>
             <html lang='en'>
               <head>
                  <meta charset='utf-8' />
                  <meta name='viewport' content='width=1024' />
                  <meta name='apple-mobile-web-app-capable' content='yes' />
                  <title>``title``</title>
                  
                  <meta name='description' content='``description``' />
                  <meta name='author' content='``author``' />
                  
                  <link href='https://fonts.googleapis.com/css?family=Cabin' rel='stylesheet'>
                  
                  <link href='css/presentation.css' rel='stylesheet' />
                  <link href='css/paraiso-dark.css' rel='stylesheet' type='text/css'>
             
                  <link rel='shortcut icon' href='favicon.png' />
                  <!--<link rel='apple-touch-icon' href='apple-touch-icon.png' />-->
                </head>
                <body class='impress-not-supported'>
                 
                 <div class='fallback-message'>
                   <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>
                   <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>
                 </div>
                 ");
        
        
        variable value stat = State();
        renderTemplate {
            write = p; 
            node = Div{
                id="impress";
                for (transition->slide in prepped) slide.render(stat = transition(stat))
            };
        };
        
        p("""    <script src="js/impress.js"></script>
                 <script>
                   document.addEventListener("DOMContentLoaded", function(event) {
                     var i =  impress();
                     i.init();
                   });
                 </script>
                 <script src="js/rainbow-custom.min.js"></script>
                 <script src="js/language/ceylon.js"></script>
               </body>
             </html>""");
    }
}

