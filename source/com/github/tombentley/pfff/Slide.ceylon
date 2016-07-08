import ceylon.html {
    FlowCategory,
    Div,
    Content
}

"A slide which will be part of a [[Presentation]]."
class Slide(id=null, clazz=null, content=[]) {
    shared String? id;
    shared String? clazz;
    shared {Content<FlowCategory>*} content;
    shared Div render(State state) {
        return Div{
            id=id else null;
            clazz = "step slide" + (clazz else "");
            attributes=state.attributes;
            children=content;
        };
    }
}