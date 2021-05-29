import {print} from '../util.js';

//input variables
const arr:number[] = [1, 2, 3, 4 ];
const arr1:string[] = ["uno", "dos", "tres", "cuatro" ];
const arr3:boolean[] = [true, false, true];

//types
type ConcatSimpleFunction = (a: any[], b: any[]) => string;
type ConcatFunction = (...args: any[]) => string;

// ************** 2. Concat **************
console.log("\n************** DELIVERABLE 02 *********************");
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
// Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

//Input two arrays
const concatSimple:ConcatSimpleFunction= (a, b) => `${a},${b}`;

//Input multiple arrays
const concat:ConcatFunction = (...args) => args.join(",");

print(true, concatSimple, arr, arr1);
print(true, concat, arr, arr1, arr3);