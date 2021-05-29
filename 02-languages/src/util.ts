//types 
type PrintFunction = (isInmutable: Boolean, customFunction: Function, ...functionArguments: any ) => void;
type PrintInmutableFunction = (functionArguments: any ) => void;

/**
 * Function that help to visualice the results.
 * @param {Boolean} isInmutable Check id the function is inmutable
 * @param {Function} customFunction Function to check
 * @param  {...any} functionArguments arguments that will use the function
 */
export const print:PrintFunction = (isInmutable, customFunction, ...functionArguments) =>{
    console.log(`\n----Resultado de ${customFunction.name}()----`);
    console.log(`Dado el/los argumento/s`,...functionArguments, `el resultado es`, customFunction(...functionArguments));
    
    if(isInmutable) printInmulable(functionArguments);
}

const printInmulable:PrintInmutableFunction = (functionArguments) =>{
    console.log(`La función es inmutable ya que los argumentos iniciales siguen siendo`, ...functionArguments)
}
