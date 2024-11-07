// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dolar) => {
    return dolar / oneEuroIs['USD'] * oneEuroIs['JPY'];
};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs['USD'];
};

const fromYenToPound = (yen) => {
    return yen / oneEuroIs['JPY'] *  oneEuroIs['GBP'];
};



module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};