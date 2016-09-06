

"A transition is a way of producing a new state from a given state."
shared alias Transition => State(State);

shared object transitions {

    "The next state will be to the right of the last one. 
     The view port moves to the right, 
     the slides appear to more to the left."
    shared Transition left = function(State state) => state.translate { ẟx = 1000; };
    "The next state will be to the left of the last one"
    shared Transition right = function(State state) => state.translate { ẟx = -1000; };
    "The next state will be below the last one"
    shared Transition down = function(State state) => state.translate { ẟy = 800; };
    "The next state will be above the last one"
    shared Transition up = function(State state) => state.translate { ẟy = -800; };
    shared Transition into = function(State state) => state.translate{ ẟz = 1000; };
    shared Transition outof = function(State state) => state.translate{ ẟz = -1000; };
    shared Transition rotX = function(State state) => state.rotate{ θ_x = 90; };
    shared Transition flipX = function(State state) => state.rotate{ θ_x = 180; };
    shared Transition rotY = function(State state) => state.rotate{ θ_y = 90; };
    shared Transition flipY = function(State state) => state.rotate{ θ_y = 180; };
    shared Transition spin = function(State state) => state.rotate{ θ_x = 180; };
    class CubeX() {
        variable value i = 0;
        shared State tx(State state) {
            value j = (i%4);
            i++;
            State s = state
                .translate{ 
                    ẟy = j == 0 || j == 3 then -400 else 400; 
                    ẟz = j == 2 || j == 3 then -400 else 400; }
                .rotate{ θ_x = -90; };
            return s;
        }
    }
    
    "Rotate (about x axis) around the outside of a cube"
    shared Transition insideCubeX = CubeX().tx;
    
    "Rotate (about x axis) around the inside of a cube"
    shared Transition outsideCubeX = CubeX().tx;
    
    class CubeY() {
        variable value i = 0;
        shared State tx(State state) {
            value j = (i%4);
            i++;
            State s = state
                .translate{ 
                    ẟx = j == 0 || j == 3 then 400 else -400; 
                    ẟz = j == 2 || j == 3 then -400 else 400; }
                .rotate{ θ_y = -90; };
            return s;
        }
    }
    
    "Rotate (about x axis) around the outside of a cube"
    shared Transition insideCubeY = CubeY().tx;
}

shared void run2() {
    variable State s = State(0, 400, 0);
    for (i in 0:4) {
        print(s);
        s = transitions.insideCubeX(s);
    }
}