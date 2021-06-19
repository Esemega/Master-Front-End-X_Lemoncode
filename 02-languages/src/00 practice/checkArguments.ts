// function f(input) {
//     var result;
//     if (input === undefined) {
//       result = "Unknown";
//     } else if (input === null) {
//       result = "";
//     } else {
//       result = input;
//     }
//     return result;
// }

const f = (input: string) : string => input === undefined ? "Unknown": input === null ? "" : input;

console.log("************** CHECK ARGUMENTS *********************");

console.log(f(undefined));
console.log(f(null));
console.log(f("Este es mi input"));
  