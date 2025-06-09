const { default : TestRunner } = require('jest-runner');

const {numeroParaTexto, unidadeToText, dezenaToText, centenaToText} = require('./intTotext')

test('should return must be a number', () => { 
    expect(numeroParaTexto('z')).toBe('must be a number');
 })

 test('should return must be an integer', () => { 
    expect(numeroParaTexto(1.25)).toBe('must be an integer');
 })

 test('should return cinco', () => { 
    expect(unidadeToText(5)).toBe('cinco');
 })


 test('should return dez', () => { 
    expect(dezenaToText(10)).toBe('dez');
 })

 test('should return onze', () => { 
    expect(dezenaToText(11)).toBe('onze');
 })

 test('should return quatorze', () => { 
    expect(dezenaToText(14)).toBe('quatorze');
 })

 test('should return quartoze', () => { 
    expect(dezenaToText(21)).toBe('vinte');
 })

 test('should return cem', () => { 
    expect(centenaToText(100)).toBe('cem');
 })

 test('should return cento', () => { 
    expect(centenaToText(114)).toBe('cento');
 })

 test('should return duzentos', () => { 
    expect(centenaToText(201)).toBe('duzentos');
 })


 test('should return zero', () => { 
    expect(numeroParaTexto(0)).toBe('zero');
 })

 test('should return menos um', () => { 
    expect(numeroParaTexto(-1)).toBe('menos um');
 })

 test('should return nove', () => { 
    expect(numeroParaTexto(9)).toBe('nove');
 })

 test('should return dezenove', () => { 
    expect(numeroParaTexto(19)).toBe('dezenove');
 })

 test('should return vinte e três', () => { 
    expect(numeroParaTexto(23)).toBe('vinte e três');
 })

 test('should return trezentos e vinte e nove', () => { 
    expect(numeroParaTexto(329)).toBe('trezentos e vinte e nove');
 })

 test('should return menos duzentos e quarenta e três', () => { 
    expect(numeroParaTexto(-243)).toBe('menos duzentos e quarenta e três');
 })

 test('should return menos um mil e quatrocentos e vinte e três', () => { 
    expect(numeroParaTexto(-1423)).toBe('menos um mil e quatrocentos e vinte e três');
 })

 test('should return menos dez mil', () => { 
    expect(numeroParaTexto(-10000)).toBe('menos dez mil');
 })


 test('should return vinte mil', () => { 
    expect(numeroParaTexto(20000)).toBe('vinte mil');
 })


 test('should return sessenta e sete mil', () => { 
    expect(numeroParaTexto(67000)).toBe('sessenta e sete mil');
 })


 test('should return trinta e dois mil e quinhentos', () => { 
    expect(numeroParaTexto(32500)).toBe('trinta e dois mil e quinhentos');
 })

 test('should return vinte e três mil e cem', () => { 
    expect(numeroParaTexto(23100)).toBe('vinte e três mil e cem');
 })
 test('should return cinquenta e dois mil e cento e vinte', () => { 
    expect(numeroParaTexto(52120)).toBe('cinquenta e dois mil e cento e vinte');
 })


 test('should return menos noventa e nove mil e novecentos e noventa e nove', () => { 
    expect(numeroParaTexto(-99999)).toBe('menos noventa e nove mil e novecentos e noventa e nove');
 })

 test('should return noventa e nove mil e novecentos e noventa e nove', () => { 
    expect(numeroParaTexto(99999)).toBe('noventa e nove mil e novecentos e noventa e nove');
 }) 

 test('should return must be between -99999 and 99999', () => { 
    expect(numeroParaTexto(100000)).toBe('must be between -99999 and 99999');
 })
 test('should return must be between -99999 and 99999', () => { 
    expect(numeroParaTexto(-100000)).toBe('must be between -99999 and 99999');
 })
