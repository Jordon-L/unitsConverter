//@desc checks if parameters exists
//@parameter query  input from user
//@return true or throw error
function checkParameters(query){
    if(!('from' in query)){
        throw new Error('from parameter is required');
    }
    if(!('fromUnit' in query)){
        throw new Error('fromUnit parameter is required');
    }
    if(!('toUnit' in query)){
        throw new Error('toUnit parameter is required');
    }
    return true;
}

//@desc get parameters
//@parameter query  input from user
//@return from and to parameters
function getParameters(query){
    let fromRegex = /^\d+\.?\d{0,16}$/;
    let validUnits = ['mm', 'cm', 'm', 'km',
    'in', 'ft', 'yd', 'mi'];
    let from = query.from;
    let fromUnit = query.fromUnit;
    let toUnit = query.toUnit;
    if(!(validUnits.includes(fromUnit))){
        throw new Error('fromUnit parameter is not a valid unit');
    }
    if(!(validUnits.includes(toUnit))){
        throw new Error('toUnit parameter is not a valid unit');
    }
    if(!(fromRegex.test(from)) || typeof from != 'string'){
        throw new Error('from parameter is not formatted correctly');
    }
    return {from, fromUnit, toUnit};
}


module.exports = {
    checkParameters,
    getParameters
}