export type TreeNodeR<T> = T | Array<TreeNodeR<T>>;

export const sample:TreeNodeR<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
export const sample2:TreeNodeR<string> = ["1", ["2", "3"], [["4"], ["5", "6", ["7", "8", ["9"]]]]];
export const sample3:TreeNodeR<number> = [10, [20, 30, 40, [5, 6, [7, 8, [9]]]]];
export const sample4:TreeNodeR<Object> = [{key1: 1}, [{key2: 2},{key3: 3}], [[{key4: 4}], {key5: 5}]];
export const sample5:TreeNodeR<boolean> = [true, [false, [false], []], true, [[[true]]]];

console.log("************** TREE *********************");
