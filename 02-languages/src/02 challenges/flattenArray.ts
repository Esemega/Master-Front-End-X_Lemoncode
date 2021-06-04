type NestedArray<T> = (T | NestedArray<T>)[];

const numberArray: NestedArray<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const stringArray:NestedArray<string> = ["1", ["2", "3"], [["4"], ["5", "6", ["7", "8", ["9"]]]]];
const booleanArray:NestedArray<boolean> = [true, [false, [false]], true, [[[true]]]];

const flatArray= <T>(arr: NestedArray<T>): T[]=> {
        return arr.reduce(
        (result: any[], element: NestedArray<T>) =>
            Array.isArray(element) 
                ? result.concat(flatArray(element)) 
                : result.concat(element)
        , []
    )
}


console.log("************** FLATTEN ARRAY *********************");
console.log(flatArray(numberArray));
console.log(flatArray(stringArray));
console.log(flatArray(booleanArray));