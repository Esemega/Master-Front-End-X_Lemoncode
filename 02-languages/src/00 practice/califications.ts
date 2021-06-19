interface ClassResults {[name: string]: number};

const eso2o : ClassResults = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

const getStringCalification = (numberCalification: number): string => {
    if (numberCalification === 10) {
        return "Matricula de honor"
    } else if(numberCalification > 9 ){
        return "Sobresaliente"
    } else if(numberCalification > 7){
        return "Notable"
    } else if (numberCalification > 6){
        return "Bien"
    } else if (numberCalification > 5){
        return "Suficiente"
    } else if (numberCalification > 4){
        return "Insuficiente"
    } else {
        return "Muy deficiente"
    }
};
    

function getValues(obj: Object): any[] {
    const result: any[] = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) result.push(obj[key]);
    }
    return result;
}

function getAverage(califications: number[]) : number{
    return califications.reduce( (acc, element) =>  acc + element, 0)/califications.length;
}

function printAverage(classResults: ClassResults): string {
    const califications = getValues(classResults);
    const average = getAverage(califications);
    return  getStringCalification(average);
}

console.log("************** CALIFICATIONS *********************");

console.log(printAverage(eso2o));