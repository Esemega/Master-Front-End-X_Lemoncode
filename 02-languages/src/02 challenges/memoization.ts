type Memoize = (fn:Function) => Function;
type Args = string |number | boolean;

//PART A & B
const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
}
  
const memoizeWithoutArgs:Memoize = (fn) => {
    let cache:any;
    return () => cache ? cache : cache = fn();
};

console.log("************** MEMOIZATION *********************");
console.log("-------- PART A --------");
const memoized = memoizeWithoutArgs(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

//PART C
let count: number = 0; // Comprobacion de nº de ejecuciones

type ReapeatText = (repetitions: number, text: string) => string;

const repeatText: ReapeatText = (repetitions, text) => 
    (count++, `${text} `.repeat(repetitions).trim());

const memoize:Memoize = (fn) => {
    let cache:Object = {};
    return (...args: Args[]) => {
        const propToCheck = args.join('-');
        if (!cache[propToCheck]) cache[propToCheck] = fn(...args);
        return cache[propToCheck];
    }
};

const memoizedGreet = memoize(repeatText);

console.log("-------- PART C --------");
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2

console.log(memoizedGreet(4, "Boom")); //Boom Boom Boom Boom
console.log(count);                    //3