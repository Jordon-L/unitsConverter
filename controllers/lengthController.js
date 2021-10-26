const utils = require('../utilities/utils');

function lengthConversion(req, res){
    try{
        let query = req.query;
        utils.checkParameters(query);
        let parameters = utils.getParameters(query);
        let toUnit = parameters.toUnit;
        let from = parameters.from;
        let fromUnit = parameters.fromUnit;
        console.log(from, fromUnit, toUnit);
        res.send('Length conversion');
    }catch(err){
        let body = {
            'error': err.message
        };
        res.status(400);
        res.send(body);
    }
};




module.exports = {
    lengthConversion
};