import ceylon.html {
    Attributes
}

"The state of a slide within a 3D certesian coordinate system "
shared class State(x=0, y=0, z=null, 
    scale=null, 
    rotateX=null, rotateY=null, rotateZ=null) {
    shared Integer? x;
    shared Integer? y;
    shared Integer? z;
    shared Integer? scale;
    shared Integer? rotateX;
    shared Integer? rotateY;
    shared Integer? rotateZ;
    
    shared Attributes attributes {
        // TODO the other data-* attributes
        return [
        "data-x"->x?.string, 
        "data-y"->y?.string,
        "data-z"->z?.string,
        "data-scale"->scale?.string,
        "data-rotate-x"->rotateX?.string, 
        "data-rotate-y"->rotateY?.string,
        "data-rotate-z"->rotateZ?.string
        ];
    }
    
    shared actual String string => attributes.string;
    
    "A new state made by translating this state."
    shared State translate(Integer ẟx=0, Integer ẟy=0, Integer ẟz=0) {
        return State { 
            x = (x else 0)+ẟx; 
            y = (y else 0)+ẟy; 
            z = (z else 0)+ẟz; 
            scale = scale; 
            rotateX = rotateX; 
            rotateY = rotateY; 
            rotateZ = rotateZ; 
        };
    }
    "A new state made by rotating this state **about where???**"
    shared State rotate(Integer θ_x=0, Integer θ_y=0, Integer θ_z=0) {
        return State {
            x=x;
            y=y;
            z=z;
            scale=scale;
            rotateX = (rotateX else 0)+θ_x;
            rotateY = (rotateY else 0)+θ_y;
            rotateZ = (rotateZ else 0)+θ_z;
        };
    }
}