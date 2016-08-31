import ceylon.collection {
    ArrayList
}
import ceylon.html {
    FlowCategory,
    Div,
    Content,
    HtmlNode=Node,
    Pre,
    Code
}
import ceylon.markdown.core {
    parse,
    FencedCode,
    IndentedCode
}
import ceylon.markdown.html {
    HtmlVisitor
}

class MyVisitor() extends HtmlVisitor() {
    shared actual HtmlNode visitFencedCode(FencedCode code) {
        value result = super.visitFencedCode(code);
        // result is <pre><code>
        // we want <pre class="code ceylon"><code data-language="ceylon">
        assert(is Pre result,
            is Code c=result.children.first);
        value lang = code.infoString.empty then "ceylon" else code.infoString;
        return Pre{
            clazz="code "+lang;
            Code{
                attributes = ["data-language"->lang];
                children=c.children;
            }
        };
    }
    
    shared actual HtmlNode visitIndentedCode(IndentedCode code) {
        value result = super.visitIndentedCode(code);
        assert(is Pre result,
            is Code c=result.children.first);
        value lang = "ceylon";
        return Pre{
            clazz="code "+lang;
            Code{
                attributes = ["data-language"->lang];
                children=c.children;
            }
        };
    }
}
"A slide which will be part of a [[Presentation]]."
shared class Slide(id=null, clazz=null, content=[]) {
    shared String? id;
    shared String? clazz;
    shared {<Content<FlowCategory>|String>*} content;
    //shared {Content<FlowCategory>*}|String speakerNotes;
    value v = MyVisitor();
    shared Div render(State state) {
        /*return Div{
            id=id else null;
            clazz = "step slide" + (clazz else "");
            attributes=state.attributes;
            children=content;
        };*/
        //value html = {for (cont in content) switch(cont) case(is String) renderPartialHtml(parse(md)) else md};
        value html = ArrayList<Content<FlowCategory>>();
        for (cont in content) {
            switch(cont)
            case (is String) {
                html.add(v.visitDocument(parse(cont)));
            }
            else {
                html.add(cont);
            }
        }
        
        return Div{
                id=id else null;
                clazz = "step slide" + (clazz else "");
                attributes=state.attributes;
                children=html;/*.chain{
                    Div{
                        clazz="speaker";
                        children = if (is String speakerNotes) then [Span{parsespeakerNotes}] else speakerNotes;
                    }
                };*/
            };
    }
}