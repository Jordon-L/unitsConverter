const assert = require('chai').assert;
const { expect } = require('chai');
const { convert } = require('../../models/lengthModel');

describe('length convert test (inches)', function(){

    it('in -> in', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    it('in -> ft', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('1.91667');
    });

    it('in -> yd', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.638889');
    });

    it('in -> mi', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.000363005');
    });

    it('in -> mm', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('584.2');
    });

    it('in -> cm', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('58.42');
    });

    it('in -> m', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.5842');
    });

    it('in -> km', function(){
        let from = '23';
        let fromUnit = 'in';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0005842');
    });


});

describe('length convert test (feet)', function(){

    it('ft -> in', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('276');
    });

    it('ft -> ft', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    it('ft -> yd', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('7.66667');
    });

    it('ft -> mi', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.00435606');
    });

    it('ft -> mm', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('7010.4');
    });

    it('ft -> cm', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('701.04');
    });

    it('ft -> m', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('7.0104');
    });

    it('ft -> km', function(){
        let from = '23';
        let fromUnit = 'ft';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0070104');
    });

    
});

describe('length convert test (yard)', function(){

    it('yd -> in', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('828');
    });

    it('yd -> ft', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('69');
    });

    it('yd -> yd', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    it('yd -> mi', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0130682');
    });

    it('yd -> mm', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('21031.2');
    });

    it('yd -> cm', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('2103.12');
    });

    it('yd -> m', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('21.0312');
    });

    it('yd -> km', function(){
        let from = '23';
        let fromUnit = 'yd';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0210312');
    });

    
});

describe('length convert test (miles)', function(){

    it('mi -> in', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('1457280');
    });

    it('mi -> ft', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('121440');
    });

    it('mi -> yd', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('40480');
    });

    it('mi -> mi', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    it('mi -> mm', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('37014900');
    });

    it('mi -> cm', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('3701490');
    });

    it('mi -> m', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('37014.9');
    });

    it('mi -> km', function(){
        let from = '23';
        let fromUnit = 'mi';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('37.0149');
    });

    
});

describe('length convert test (millimetre)', function(){

    it('mm -> in', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.905512');
    });

    it('mm -> ft', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0754593');
    });

    it('mm -> yd', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0251531');
    });

    it('mm -> mi', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0000142915');
    });

    it('mm -> mm', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    it('mm -> cm', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('2.3');
    });

    it('mm -> m', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.023');
    });

    it('mm -> km', function(){
        let from = '23';
        let fromUnit = 'mm';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.000023');
    });

    
});

describe('length convert test (centimetre)', function(){

    it('cm -> in', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('9.05512');
    });

    it('cm -> ft', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.754593');
    });

    it('cm -> yd', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.251531');
    });

    it('cm -> mi', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.000142915');
    });

    it('cm -> mm', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('230');
    });

    it('cm -> cm', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    it('cm -> m', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.23');
    });

    it('cm -> km', function(){
        let from = '23';
        let fromUnit = 'cm';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.00023');
    });

    
});

describe('length convert test (metre)', function(){

    it('m -> in', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('905.512');
    });

    it('m -> ft', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('75.4593');
    });

    it('m -> yd', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('25.1531');
    });

    it('m -> mi', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.0142915');
    });

    it('m -> mm', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('23000');
    });

    it('m -> cm', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('2300');
    });

    it('m -> m', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    it('m -> km', function(){
        let from = '23';
        let fromUnit = 'm';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('0.023');
    });

    
});

describe('length convert test (kilometre)', function(){

    it('km -> in', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'in';
        expect(convert(from, fromUnit, toUnit)).to.eql('905512');
    });

    it('km -> ft', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'ft';
        expect(convert(from, fromUnit, toUnit)).to.eql('75459.3');
    });

    it('km -> yd', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'yd';
        expect(convert(from, fromUnit, toUnit)).to.eql('25153.1');
    });

    it('km -> mi', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'mi';
        expect(convert(from, fromUnit, toUnit)).to.eql('14.2915');
    });

    it('km -> mm', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'mm';
        expect(convert(from, fromUnit, toUnit)).to.eql('23000000');
    });

    it('km -> cm', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'cm';
        expect(convert(from, fromUnit, toUnit)).to.eql('2300000');
    });

    it('km -> m', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'm';
        expect(convert(from, fromUnit, toUnit)).to.eql('23000');
    });

    it('km -> km', function(){
        let from = '23';
        let fromUnit = 'km';
        let toUnit = 'km';
        expect(convert(from, fromUnit, toUnit)).to.eql('23');
    });

    
});