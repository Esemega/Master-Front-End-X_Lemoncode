import {print} from '../util.js';

//input variables
const arr = [1, 2, 3, 4 ];
const arr1 = ["uno", "dos", "tres", "cuatro" ];

console.log("\n************** DELIVERABLE 02 *********************");
// 2. Concat

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
// Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).


// const concat = (a, b) => `${a},${b}`;

//Opcional
const concat = (...args) => args.join(",");

print(true, concat, arr, arr1);