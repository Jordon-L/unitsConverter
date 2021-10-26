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
    let fromRegex = /^\d+\.?\d{0,9}$/;
    let fromRegexAlt = /\d+\/[12345679]\d*$/
    let validUnits = ['mm', 'cm', 'm', 'km',
    'in', 'ft', 'yd', 'mi'];
    let from = query.from;
    let fromUnit = query.fromUnit;
    let toUnit = query.toUnit;
    if(!(validUnits.includes(fromUnit))){
        throw new Error('fromUnits parameter is not a valid unit');
    }
    if(!(validUnits.includes(toUnit))){
        throw new Error('toUnits parameter is not a valid unit');
    }
    console.log(fromRegex.test(from))
    if(!(fromRegex.test(from))){
        throw new Error('from parameter is not formatted correctly');
    }
    if(fromRegexAlt.test(from)){
        let array = from.split('/');
        console.log(array);
    }
    return {from, fromUnit, toUnit};
}


module.exports = {
    checkParameters,
    getParameters
}