import ceylon.html {
    P
}

import com.github.tombentley.deck {
    Slide,
    Transition
}
{Slide|Transition*} part1 => [
    Slide{
        "A lightning tour of the language",
        P{clazz="small"; "(10 minutes)"}
    },
    //transitions.insideCubeX,
    Slide{
        id="hello";
        """### `hello()`
           
           Let's start with a function and see where we end up.
           
               void hello(String name) {
                   print("Hello " + name);
               }
           
           * Not much to say here.
           * `print` is a function from 
             the Ceylon language module (`ceylon.language`) that prints 
             to standard output.
           * We can concatenate Strings using `+`."""
    },
    Slide{
        id="defaulted-parameters";
        """### Defaulted parameters
           
           What if we want to be able to call `hello`
           without passing an argument? 
           
           Ceylon doesn't 
           have method overloading like Java does. 
           But we *can* give parameters a default value.
           
               void hello(String name="world") {
                    print("Hello " + name);
                }
           
        """
    },
    Slide{
        id="invocation";
        """### Invoking `hello()`
           
           Given
           
               void hello(String name="world") {
                   print("Hello " + name);
               }
           
           then we can call it like this:
           
               // call site
               hello();
               hello("Tom");
        """
    },
    Slide{
        id="null";
        """### `String` means string
           
               hello(null);// error
           
           * Ceylon is very particular about null.
           * `String` means "a string" and not
             "a string or null" (like it does in Java).
           * I'm not allowed to pass null (or something 
             that might be null) to something that's 
             not expecting it."""
    },
    Slide{
        id="null-safety";
        """### `String?`
           
           If I wanted to permit `hello()` to take a `null` argument?
           
           I would have to declare it slightly differently:
           
               void hello(String? name="world") {
                   print("Hello " + name);// error
               }
           
           The `String?` parameter type means "`String` or null".
           
           There's no longer an error at the callsite
           
               hello(null);
           
           But we've got that *new* error where we use `name`."""
    },
    Slide{
        id="if-exists";
        """### `if(exists ...`
           
           Since `name` has the type
           "`String` or null" there exists the possibility 
           it could be `null`. So we need to branch 
           to distinguish the `null` and non-`null` 
           cases:
           
               void hello(String? name="world") {
                   if (exists name) {
                        print("Hello " + name);
                   } else {
                        print("Hello, whoever you are");
                   }
               }
           
           The `if (exists ...` construct is a combined 
           typecheck-and-downcast in one)."""
    },
    Slide{
        id="switch";
        """### `switch`
           
           Another way to do the same thing is using `switch`
           
               void hello(String? name="world") {
                   switch(name)
                   case (is String) {
                       print("Hello " + name);
                   } else {
                       print("Hello, whoever you are");
                   }
               }
           
           * The `case (is String)` is distinguishing the `String`
             case from the `Null` case.
           * There is no need for `break`: `case` never falls through.
           * `else` is like Java's `default`
           """
    },
    Slide{
        id="flow-typing";
        """### Flow typing
           
           Within the block guarded by the `if (exists ...)`
           or `switch (is ...)` the value automatically has the narrowed 
           type. This synergy of control flow and 
           type narrowing is called **flow typing**.
           
               // outside if block name has type String?
               // and "Hello "+name is a compile error
               if (exists name) {
                    // inside block name has type String
                    // and so "Hello "+name is allowed
               }
        """
    },
    Slide{
        id="union1";
        """### `?` was just sugar
        
           This `String?` type is just syntax sugar. It means
        
               String|Null
               
           (pronounced "string or null"). 
           
           * `Null` is the type of `null`.
           * In a type `|` is an operator which means "or".
           * It lets us list a bunch of cases."""
    },
    //transitions.right,
    Slide{
        id="union2";
        """### Union types
           
           We can use other types with `|`.
           
               String|Integer
           
           just means "String or Integer". 
           
           * We call these types **union types**.
           * Again we can use `if` or `switch` to distinguish the cases. 
           """
    },
    Slide{
        id="hof";
        """### Abstrating away `print()`
        
           `hello()` is nice, but it hard-codes the fact that 
           we're writing to standard output (by using `print`). 
           
           I now 
           want to abstract away where we're sending the 
           greeting."""
    },
    Slide{
        id="hof2";
        """### Types of functions
        
           * I don't need an interface to do this. 
           * All I need is something that consumes `String`s.
           * Any function that takes a single `String` 
             parameter will do.
           
           The type of such a function is
           
               Anything(String)
           
           (`Anything` because I don't care what the 
           function returns).
           
           This is an example of the `Callable` type."""
    },
    Slide{
        id="hof3";
        """### Function references
        
           Let's add a parameter for that:
           
               void hello(String name, Anything(String) emit=print) {
                   emit("Hello " + name);
               }
           
           I invoke the function `emit` by adding an argument list.
           At a call site I have to pass a function:
        
               hello("Tom", print);
                
           `print` (without parentheses) is just a reference to the 
           `print()` function."""
    },
    Slide{
        id="hof4";
        """### Function references
           
           With this abstraction I can print to a file, or a 
           socket or whatever:
           
               hello("Tom", fileWriter.write);
               hello("Tom", socket.write);
               hello("Tom", stringBuilder.append);
               // etc.
        """
    },
    Slide{
        id="iterable";
        """### Iteration
           
           What if I want to greet several people? 
           
           I need `name` to become `names`, and I need to 
           be able to iterate it:
           
               void helloAll(Anything(String) emit, 
                       {String*} names) {
                   for (name in names) {
                       emit("Hello ``name``\n");
                   }
               }
           
           * `{String*}` means "`Iterable` of zero or more `String`s".
           * (There's also `{String+}`
             meaning "`Iterable` of one or more `String`s").
        """
    },
    Slide{
        id="inference";
        """### Look, no types!
           
               for (name in names) {
               
           Note that I didn't need to explicitly declare the type of
           `name` in that `for` statement.
           
           The compiler looks on the right hand side (at `names`), sees an 
           `Iterable<String>` so knows `name` must be a `String`."""
    },
    Slide{
        id="inference2";
        """### Type inference
           
           In fact the compiler can figure out the type of 
           a declaration from an expression for local 
           values and functions too:
           
               // compiler knows greeting is a String
               value greeting = "Hello ";
           
           * We can use the `value` (or `function`) keyword where we 
             would have to write a type.
           * This is called **type inference**.
           * The compiler always chooses the single 
             most specific type."""
    },
    Slide{
        id="iterable-literals";
        """### Iterable literals
           
           How might I call `helloAll()`? 
           I need an iterable.
           I can use an *iterable literal*:
           
               value names = {"Tom", "Dick", "Harry"};// iterable literal
               helloAll(names);
           
           * The type of `names` is `{String+}` (`Iterable` of one or more `String`s).
           * `Iterable`s are *lazily evaluated*.
           """
    },
    Slide{
        id="tuple literals";
        """###  Tuple literals
           
           Alternatively I could use a `Tuple` to call `helloAll()`
           (`Tuple` inherits `Iterable`):
           
               value names = ["Tom", "Dick", Harry"];
               helloAll(names);
               
           * The type of `names` is `String[3]` (which means `[String, String, String]`).
           * A `Tuple` knows the type of each of its elements (so I can have
           `[String, Integer, Boolean]` for example).
           * There are other kinds of Iterable too.
           """
    },
    Slide{
        id="comprehension";
        """### Comprehension
           
           A comprehension lets me create an iterable or tuple by filtering, 
           mapping and combining other iterables.
           
               void greetDogOwners({Animal*} pets) {
                   helloAll({for (pet in pets)
                       if (is Dog pet) 
                           pet.owner});
                           
           * Rather than listing elements in the iterable or tuple literal I use `for`
           * The `if` filters out the non-Dogs
           * Then I get the `Dog`'s owner
           * In general, I can combine `for` and `if` arbitrarily.
           """
    },
    Slide{
        id="class";
        """### A class
           
           Let's use a class to say more than just "hello":
           
               class Greeter(void emit(String str)) {
                   shared void hello(String name) {
                       emit("Hello " + name);
                   }
                   shared void bye(String name) {
                       emit("Cheerio " + name);
                   }
               }
           
           * The class has its own parameter list. 
           * I can use `emit` because it is in an outer scope of `hello`.
           * `shared` allows the method to be called from outside
            `Greeter`.
        """
    },
    Slide{
        id="";
        """### Instantiation and invocation
        
           I instantiate the class just by invoking it 
           (no need for `new`). 
           
           I can do that with positional arguments:
            
               Greeter(print);
           
           Or I can invoke with *named arguments*:
           
               Greeter{
                   emit=print;
               };
           
           Note: each name binding ends with a `;`."""
    },
    Slide{
        id="named-arguments";
        """### Named arguments
           
           With named argument invocation there's some flexibility 
           in how I pass `Iterable` arguments. 
           I can pass them by name:
        
               helloAll{
                   names=["Tom", "Dick", "Harry"];
               };
           
           Or if where's a single unspecified `Iterable` parameter
           I can list them:
        
               helloAll{
                   "Tom", "Dick", "Harry"
               };
        """
    },
    Slide{
        id="html-getter";
        """By nesting named arguments I end up with a tree of invocations.
           Let's make a `Greeter` that outputs HTML:
           
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
               }
           
           The syntax matches the tree of 
           objects we're building."""
    }
    
];
