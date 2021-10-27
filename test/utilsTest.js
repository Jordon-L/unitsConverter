const assert = require('chai').assert;
const { expect } = require('chai');
const utils = require('../utilities/utils');

describe('checkParameters test', function(){
    
    it('no input', function(){
        let query = {
        }
        expect(function(){
            utils.checkParameters(query)
        })
        .to.throw(Error,'from parameter is required');
    });

    it('from parameter is required', function(){
        let query = {
            'fromUnit': 'cm',
            'toUnit': 'm'
        }
        expect(function(){
            utils.checkParameters(query)
        })
        .to.throw(Error,'from parameter is required');
    });

    it('fromUnits parameter is required', function(){
        let query = {
            'from': '23',
            'toUnit': 'm'
        }
        expect(function(){
             utils.checkParameters(query);
        })
        .to.throw(Error,'fromUnit parameter is required');
    });

    it('toUnit parameter is required', function(){
        let query = {
            'from': '23',
            'fromUnit': 'cm'
        }
        expect(function(){
            utils.checkParameters(query)
        })
        .to.throw(Error,'toUnit parameter is required');
    });

    it('All 3 parameters', function(){
        let query = {
            'from': '23',
            'fromUnit': 'cm',
            'toUnit': 'm'
        }
        expect(utils.checkParameters(query)).to.be.true; 
    });




});

describe('getParameters test', function(){

    it('incorrect from format', function(){
        let query = {
            'from': '232a3aa',
            'fromUnit': 'cm',
            'toUnit': 'm'
        }
        expect(function(){
            utils.getParameters(query)
        })
        .to.throw(Error,'from parameter is not formatted correctly');
    });
    
    it('incorrect fromUnit', function(){
        let query = {
            'from': '23',
            'fromUnit': '2333cm',
            'toUnit': 'm'
        }
        expect(function(){
            utils.getParameters(query)
        })
        .to.throw(Error,'fromUnit parameter is not a valid unit');
    });
    
    it('incorrect toUnit', function(){
        let query = {
            'from': '23',
            'fromUnit': 'cm',
            'toUnit': 'dm'
        }
        expect(function(){
            utils.getParameters(query)
        })
        .to.throw(Error,'toUnit parameter is not a valid unit');
    });  

    it('correct parameters', function(){
        let query = {
            'from': '23',
            'fromUnit': 'cm',
            'toUnit': 'in'
        }
        expect(utils.getParameters(query)).to.eql({from: 23, fromUnit: 'cm', toUnit: 'in'});
    });

    it('correct parameters 2', function(){
        let query = {
            'from': '2/3',
            'fromUnit': 'cm',
            'toUnit': 'in'
        }
        expect(utils.getParameters(query)).to.eql({from: 2/3, fromUnit: 'cm', toUnit: 'in'});
    });

    it('correct parameters 3', function(){
        let query = {
            'from': '26/11',
            'fromUnit': 'in',
            'toUnit': 'in'
        }
        expect(utils.getParameters(query)).to.eql({from: 26/11, fromUnit: 'in', toUnit: 'in'});
    });

    it('correct parameters 4', function(){
        let query = {
            'from': '52',
            'fromUnit': 'mi',
            'toUnit': 'km'
        }
        expect(utils.getParameters(query)).to.eql({from: 52, fromUnit: 'mi', toUnit: 'km'});
    });

    it('correct parameters 5', function(){
        let query = {
            'from': '52',
            'fromUnit': 'yd',
            'toUnit': 'mm'
        }
        expect(utils.getParameters(query)).to.eql({from: 52, fromUnit: 'yd', toUnit: 'mm'});
    });

    it('correct parameters 6', function(){
        let query = {
            'from': '52',
            'fromUnit': 'ft',
            'toUnit': 'm'
        }
        expect(utils.getParameters(query)).to.eql({from: 52, fromUnit: 'ft', toUnit: 'm'});
    });
    
});