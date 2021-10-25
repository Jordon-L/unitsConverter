const utils = require('../utilities/utils');

function lengthConversion(req, res){
    try{
        let query = req.query;
        utils.checkParameters(query);
        let parameters = utils.getParameters(query);
        let to = parameters.to;
        let from = parameters.from;
        console.log(from,to);
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