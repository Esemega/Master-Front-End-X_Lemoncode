interface Tree<T> {
    tag: string,
    children?: Tree<T>[],
    text?: string
}

const tree: Tree<string> = {
    tag: "html",
    children: [
        { 
            tag: "head",
            children: [
                { 
                    tag: "title",
                    text: "HWW - the Hello World Web "

                }
            ]
        },
        { 
            tag: "body",
            children: [
                { 
                    tag: "header",
                    children: [
                        { 
                            tag: "nav",
                        }
                    ]
                },
                { 
                    tag: "main",
                    children: [
                        { 
                            tag: "h1",
                            text: "HELLO WORLD"
                        }
                    ]
                },
                { 
                    tag: "footer",
                }
            ]
        }
    ]
}

console.log("************** TREE *********************");
console.log(tree)
