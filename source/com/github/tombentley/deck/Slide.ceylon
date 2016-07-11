import ceylon.html {
    FlowCategory,
    Div,
    Content,
    Span
}

"A slide which will be part of a [[Presentation]]."
shared class Slide(id=null, clazz=null, content=[], speakerNotes=[]) {
    shared String? id;
    shared String? clazz;
    shared {Content<FlowCategory>*} content;
    shared {Content<FlowCategory>*}|String speakerNotes;
    shared Div render(State state) {
        /*return Div{
            id=id else null;
            clazz = "step slide" + (clazz else "");
            attributes=state.attributes;
            children=content;
        };*/
        return Div{
                id=id else null;
                clazz = "step slide" + (clazz else "");
                attributes=state.attributes;
                children=content.chain{
                    Div{
                        clazz="speaker";
                        children = if (is String speakerNotes) then [Span{speakerNotes}] else speakerNotes;
                    }
                };
            };
    }
}