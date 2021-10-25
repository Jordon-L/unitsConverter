function checkParameters(query){
    if(!('from' in query)){
        throw new Error('from parameter is required');
    }
    if(!('to' in query)){
        throw new Error('to parameter is required');
    }
    return true;
}

function getParameters(query){
    let from = query.from;
    let to = query.to;
    return {from, to};
}


module.exports = {
    checkParameters,
    getParameters
}