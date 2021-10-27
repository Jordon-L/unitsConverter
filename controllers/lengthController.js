const utils = require('../utilities/utils');
const length = require('../models/lengthModel');

function conversion(req, res){
    try{
        let query = req.query;
        utils.checkParameters(query);
        let parameters = utils.getParameters(query);
        let toUnit = parameters.toUnit;
        let from = parameters.from;
        let fromUnit = parameters.fromUnit;
        let result =  length.convert(from, fromUnit, toUnit);
        let body = {
            result : result
        }
        res.send(body);
    }catch(err){
        let body = {
            'error': err.message
        };
        res.status(400);
        res.send(body);
    }
};




module.exports = {
    conversion
};