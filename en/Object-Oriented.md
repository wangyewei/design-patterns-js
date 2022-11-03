## Dynamic Typing And Duck Typing
&emsp;&emsp;Programming languages can be roughly divided into `static types` and `dynamic types` according to data types.
&emsp;&emsp;A static language determines the type of a variable at compole time, and a dynamic language dose't have a specific type until the variable is assigned a value when the program is running.

### Advantage Of Static Language
1. Type mismatch errors can be found at compile time, and the complier can avoid problems that occur during program execution in advance
2. If the data type is clearly specified, that compliler can optimize the program and improve the execution speed of the program.

### Disadvantage Of Static Language
1. Force developers to write programs according to strong contracts.
2. Add more code to distact.

### Advantage Of Dynamic Language
1. The number of codes is less and it looks more concise, allowing developers to focus more on bussiness logic.

### Disadvantage Of Dynamic Language
1. The variable type can't be guaranteed, resulting in possible type-related errors.

## Duck Typing
&emsp;&emsp;JavaScript is a typical dynamic language, and the flexibility of the variable types in dynamic languages brings great flexibility to coding. All of this is based in the concept of "Duck Typing".The popular saying of duck type is: "If it walks like aduck and quacks like a duck, then he is a duck"
&emsp;&emsp;Duck Typing emphasizes of foucusing only on the behavior of the object, not the object itselft, just 「Has」instead of 「Is」.The rinciple of "programing to the interface, not the implementation" can be easeily implemented.

## Polymorphism
&emsp;&emsp;`Polymorphism` comes from the Greek, and the actual meaning is: "The same operation can be produce diffrent interpretations and diffrenct execution results on diffrent objects".

&emsp;&emsp;The idea of polymorphism is to sprate "what to do" from "who dose it and "how to do it". Isolate the constant parts and encapsulate the variable parts, which can be based on ability to extend the program, Such a program looks "growable" and conforms to the "open-close" principle.

## Object Polymorphism

Isolate the constant parts:

```javascript
const makeSound = animal => {   
    animal.sound()
}

```

Each encapsulates variable parts

```javascript


```
