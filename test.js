const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js')

test('Cambio Dollar a Yen, si Dollar = 1.07 -> Yen = 156.5', () => {
    let result = fromDollarToYen(1.07);
    expect(result).toBe(156.5);
}); 

test('Cambio Euro a Dollar, si Euro = 1 -> Dolar = 1.07', () => {
    let result = fromEuroToDollar(1);
    expect(result).toBe(1.07);
}); 

test('Cambio Yen a Pund, si Yen = 156.5 -> Pound = 0.87', () => {
    let result = fromYenToPound(156.5);
    expect(result).toBe(0.87);
}); 

