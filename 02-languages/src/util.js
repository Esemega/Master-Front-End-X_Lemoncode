/**
 * Function that help to visualice the results.
 * @param {Boolean} isInmutable Check id the function is inmutable
 * @param {Function} customFunction Function to check
 * @param  {...any} functionArguments arguments that will use the function
 */
export const print = (isInmutable, customFunction, ...functionArguments) =>{
    if(customFunction.name === "isBookRead"){
        console.log(`\n----Resultado de ${customFunction.name}()----`);

        console.log("Dado el array de libros", ...functionArguments[0]);
        for (let i = 1; i < functionArguments.length; i++) {
            console.log(`¿Se ha leído el libro "${functionArguments[i]}"?`, customFunction(functionArguments[0], functionArguments[i]));
        }
        
    } else{
        console.log(`\n----Resultado de ${customFunction.name}()----`);
        console.log(`Dado el/los argumento/s`,...functionArguments, `el resultado es`, customFunction(...functionArguments));
    }
    

    if(isInmutable){
        printInmulable(functionArguments);
    }
}

const printInmulable = (...functionArguments) =>{
    console.log(`La función es inmutable ya que los argumentos iniciales siguen siendo`, ...functionArguments)
}
