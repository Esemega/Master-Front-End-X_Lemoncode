//types
type Myget = <T>(obj:Object, target:string) => T;
type Deepget = (obj:Object, ...target:string[]) => any;
type DeepSet = (value:number, obj:Object, ...keys:string[]) => void;

//input variables
const myObject:Object = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};


// APARTADO A
const getTarget:Myget = (obj, target) => obj[target];

const deepGet:Deepget = (obj, ...targets) => {
  let result:Object = obj;
  targets.forEach(target => result = getTarget(result, target));
  return result;
}

console.log("-------- PART A --------");
console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {...}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}


//APARTADO B
const myObject2:Object = {};


const deepSet:DeepSet = (value, obj, ...keys) => {
  if(keys.length === 0) return obj;
  
  const [head, ...tail] = keys;
  if(tail.length === 0) return obj[head] = value;
  
  let newContent:Object;
  tail.forEach( element => {
    if(typeof obj[head] === "object") {
      newContent = obj[head] = {...obj[head], [element]: value};
    } else {
      newContent = obj[head] = {[element]: value};
    }
  })
  obj = {...obj, newContent};
}

console.log("-------- PART B --------");
deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2));  // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2));  // {a: { b: 1, c: 2}}
deepSet(67, myObject2, "a", "d");
console.log(JSON.stringify(myObject2)); //{"a":{"b":1,"c":2,"d":67}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2));  // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2));  // Do nothing // {a: 3}