const conversions = require('../utilities/conversions');
const Decimal = require('decimal.js');
const conversionTable = conversions.length;

function convert(from, fromUnit, toUnit){
    let formula = conversionTable[fromUnit][toUnit];
    let result = Decimal.mul(Decimal(from),Decimal(formula));
    return result;
}



module.exports = {
    convert
};