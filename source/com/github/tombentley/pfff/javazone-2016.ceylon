import ceylon.html {
    P,
    Ul,
    Code,
    Li,
    H3,
    H1,
    Pre,
    H2
}

"Put the given string inside <pre><code>"
Pre code(String text)
    => Pre{clazz="code ceylon";
        Code {
            attributes=["data-language"->"ceylon"];
            text
        }
    };

"The actual presentation"
Presentation presentation = Presentation {
    Slide{
        id="title";
        H2{"The most incredible Ceylon presentation you'll ever see"},
        H3{"Tom Bentley"},
        H3{"Javazone, Oslo, September 2016"}
        
    },
    transitions.insideCubeY,
    Slide{
        H1{"Ceylon"},
        P{"Ceylon is"},
        Ul{
            Li{"A modern type safe programming language which runs on Java and JavaScript virtual machines"},
            Li{"A modular platform with its own SDK"},
            Li{"supported by a discoverable CLI and full-featured IDEs"},
            Li{"well suited to developing microservices"},
            Li{"Android-enabled"}
        }
    },
    Slide{
        H2{"A lightning tour of the language"},
        P{clazz="small"; "(10 minutes)"}
    },
    Slide{
        id="hello";
        H3{"hello()"},
        """Let's start with a function and see where we end up.""",
        code("""void hello(String name) {
                    print("Hello " + name);
                }"""),
        """Not much to say here. `print` is a function from 
           the Ceylon language module that prints 
           to standard output.""",
        """We can concatenate Strings using `+`."""
    },
    Slide{
        id="defaulted-parameters";
        H3{"Defaulted parameters"},
        """What if we want to be able to call `hello`
            without passing an argument? Ceylon doesn't 
            have method overloading like Java does. 
            But we can give parameters a default value.""",
        code("""void hello(String name="world") {
                    print("Hello " + name);
                }""")
    },
    //into,
    Slide{
        id="invocation";
        H3{"Invoking hello()"},
        """Given""",
        code("""void hello(String name="world") {
                    print("Hello " + name);
                }
             """),
        """then we can call it like this:""",
        code("""    // call site
                    hello();
                    hello("Tom");
                """)
    },
    //outof,
    Slide{
        id="null";
        H3{"String means string"},
        code("""    hello(null);// error"""),
        """Ceylon is very particular about null.
            `String` means "a string" and not
            "a string or null" (like it does in Java).
            I'm not allowed to pass null (or something 
            that might be null) to something that's 
            not expecting it."""
    },
    //rotY,
    Slide{
        id="null-safety";
        H3{"String?"},
        """If I wanted to permit `hello()` to take a `null` argument
           I would have to declare it slightly differently:""",
        code("""void hello(String? name="world") {
                    print("Hello " + name);// error
                }"""),
        """The String? parameter type means "String or null".""",
        """There's no longer an error at the callsite""",
            code("""    hello(null);"""),
        """But we've got that error where we use `name`."""
    },
    //flipY,
    Slide{
        id="if-exists";
        H3{"if(exists ..."},
        """There's almost nothing you can do 
            with `null` in Ceylon. And while `name` has the type
            "String or null" there exists the possibility 
            it could be null. So we need to branch 
            to distinguish the null case and non-null 
            case:""",
        code("""void hello(String? name="world") {
                  if (exists name) {
                    print("Hello " + name);
                  } else {
                    print("Hello, whoever you are");
                  }
                }"""),
        """The `if (exists ...` construct is a combined 
           typecheck-and-downcast in one."""
    },
    //rotX,
    Slide{
        id="switch";
        H3{"switch"},
        """Another way to do the same thing is using `switch`""",
        code("""void hello(String? name="world") {
                  switch(name)
                  case (is String) {
                    print("Hello " + name);
                  } else {
                    print("Hello, whoever you are");
                  }
                }"""),
                """The `case (is String)` is distinguishing the `String`
                   case from the `Null` case."""
    },
    //flipX,
    Slide{
        id="flow-typing";
        H3{"Flow typing"},
        """Within the block guarded by the `if (exists ...)`
           or `switch (is ...)` the value has the narrowed 
           type. This synergy of control flow and 
           type narrowing is called **flow typing**.
           """,
           code("""// name has type String?
                   // "Hello "+name is a compile error
                   if (exists name) {
                       // name has type String
                       // "Hello "+name is allowed
                   }""")
    },
    //spin,
    Slide{
        id="union1";
        H3{"? was just sugar"},
        """This `String?` type is just syntax sugar. It means""",
        code("""String|Null"""),
        """(pronounced "string or null"). 
            `Null` is the type of `null`.
            In a type `|` is an operator which means "or".
            It lets us list a bunch of cases."""
    },
    transitions.right,
    Slide{
        id="union2";
        H3{"Union types"},
        """We can use other types with `|`.""",
        code("String|Integer"),
        """just means "String or Integer". 
           Again we can use `if` or `switch` to distinguish the cases. 
           We call these types **union types**."""
    },
    Slide{
        id="hof";
        H3{"Abstrating away print()"},
        """`hello()` is nice, but it hard-codes the fact that 
           we're writing to standard output. I now 
           want to abstract away where we're sending the 
           greeting."""
    },
    Slide{
        id="hof2";
        H3{"Types of functions"},
        """I don't need an interface to do this. 
           All I need is something that consumes Strings.
           Any function that takes a single String 
           parameter will do.

           The type of such a function is""",
          code("""Anything(String)"""),
                
            """(Anything because I don't care what the 
               function returns).
               This is the `Callable` type."""
    },
    Slide{
        id="hof3";
        H3{"Function references"},
        """Let's add a parameter for that:""",
        code("""void hello(Anything(String) emit, String name) {
                    emit("Hello " + name);
                }"""),
        """I invoke the function `emit` by adding an argument list.""",
        """At a call site I have to pass a function:""",
        code("""    hello(print, "Tom");
                """),
        """`print` without parenthesis is just a reference to the 
           `print()` function."""
    },
    Slide{
        id="hof4";
        H3{"Function references"},
        """With this abstraction I can print to a file, or a 
            socket or whatever:""",
        code("""
                    hello(writer.write, "Tom");
                """)
    },
    Slide{
        id="iterable";
        H3{"Iteration"},
        """What if I want to greet several people? 
           I need `name` to become `names`, and I need to 
           be able to iterate it:""",
           code("""
                   void hello(Anything(String) emit, 
                              {String*} names) {
                       for (name in names) {
                           emit("Hello ``name``\n");
                       }
                   }"""),
           """`{String*}` means "Iterable of zero or more String".
              (There's also `{String+}`
              meaning "Iterable of one or more String")."""
    },
    Slide{
        id="inference";
        H3{"Look, no types!"},
        """Note that I didn't need to explicitly declare the type of
           `name` in that `for` statement:""",
        code("""
                    for (name in names) {
                """),
        """The compiler looks on the right hand side (at `names`), sees an 
           `Iterable<String>` so knows `name` must be a `String`."""
    },
    Slide{
        id="inference2";
        H3{"Type inference"},
        """In fact the compiler can figure out the type of 
            a declaration from an expression for local 
            values and local functions too:""",
        code("""
                // compiler knows greeting is a String
                value greeting = "Hello ";
                """),
        """We use the value (or function) keyword where we 
           would have to write a type.
           This is called <em>type inference</em>.
           The compiler always chooses the single 
           most specific type."""
    },
    Slide{
        id="class";
        H3{"A class"},
        """What if I want to say more than just "hello"?
            Let's use a class:""",
        code("""class Greeter(Anything(String) emit) {
                    shared void hello({String*} names) {
                        // ...
                    }
                    shared void bye({String*} names) {
                        // ...
                    }
                }"""),
         """The class has its own parameter list. Because
            `emit` is in an outer scope of `hello` I can use it — 
            I don't need to explictly declare a field.
            `shared` allows the method to be called from outside
            `Greeter`.
            """
    },
    Slide{
        id="";
        H3{"Instantiation and invocation"},
        """I instantiate the class just by invoking it 
            (no need for `new`). I can do that with 
            positional arguments:""",
        code("""Greeter(print);
                """),
            """Or I can invoke with **named arguments**:""",
        code("""Greeter{
                    emit=print;
                };
                """),
            """Note each name binding ends with a `;`."""
    },
    Slide{
        id="named-arguments";
        H3{"Named arguments"},
        """With named argument invocation there's some flexibility 
            in how I pass `Iterable` arguments. 
            I can pass them by name:""",
        code("""value greeter = Greeter(print);
                greeter.hello{
                    names=["Tom", "Dick", "Harry"];
                };
                """),
            """Or if there's a single unspecified iterable parameter
               I can list them:""",
        code("""greeter.hello{
                    "Tom", "Dick", "Harry"
                };""")
    },
    Slide{
        id="html-getter";
        """By nesting named arguments I end up with a tree of invocations.
            Let's make a `Greeter` that outputs HTML:""",
        code("""
                class HtmlGreeter(Anything(Node) emit) {
                  shared void hello({String*} names) {
                    emit(
                      Div{
                        "Hello ", 
                        Span{
                          clazz="name";
                          children=names;
                        }
                      }
                    );
                  }
                }"""),
         """The syntax matches the tree of 
            objects we're building."""
    },
    // TODO comprehensions
    Slide{
        H2{"A microservice using ceylon.http.server"},
        P{clazz="small"; "(10 minutes)"}
    },
    Slide{
        H2{"A microservice using vertX"},
        P{clazz="small"; "(15 minutes)"}
    },
    Slide{
        H2{"An Android app"},
        P{clazz="small"; "(20 minutes)"}
    },
    Slide{
        H2{"Fin"},
        P{clazz="small"; "(the rest of your life)"},
        P{"Questions"}
    }

};