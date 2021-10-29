const conversions = require('../utilities/conversions');
const Decimal = require('decimal.js');
const conversionTable = conversions.length;
Decimal.set({ precision: 6 })

function convert(from, fromUnit, toUnit){
    let formula = conversionTable[fromUnit][toUnit];
    let result = Decimal.mul(new Decimal(from),new Decimal(formula));
    return result.toString();
}



module.exports = {
    convert
};