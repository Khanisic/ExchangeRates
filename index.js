async function Rates(callback) {
    var ExchangeRatesDetails = await fetch('https://api.exchangeratesapi.io/latest');
    ExchangeRatesDetails = await ExchangeRatesDetails.json();
    callback(ExchangeRatesDetails);
}

const valueCAD = document.getElementById('CAD');
const valueINR = document.getElementById('INR');
const valueGBP = document.getElementById('GBP');
const valueJPY = document.getElementById('JPY');
const valueUSD = document.getElementById('USD');

valueCAD.oninput = function(){
    var temp = valueCAD.value;
    Rates( data =>{
        valueINR.value = ( temp * data.rates.INR / data.rates.CAD ).toFixed(2);
        valueGBP.value = (temp * data.rates.GBP / data.rates.CAD).toFixed(2);
        valueJPY.value = (temp * data.rates.JPY / data.rates.CAD).toFixed(2);
        valueUSD.value = (temp * data.rates.USD / data.rates.CAD).toFixed(2);
    });

};

valueINR.oninput = function(){
    var temp = valueINR.value;
    Rates( data =>{
        valueCAD.value = ( temp * data.rates.CAD / data.rates.INR ).toFixed(2);
        valueGBP.value = (temp * data.rates.GBP / data.rates.INR).toFixed(2);
        valueJPY.value = (temp * data.rates.JPY / data.rates.INR).toFixed(2);
        valueUSD.value = (temp * data.rates.USD / data.rates.INR).toFixed(2);
    });

};
valueGBP.oninput = function(){
    var temp = valueGBP.value;
    Rates( data =>{
        valueINR.value = ( temp * data.rates.INR / data.rates.GBP ).toFixed(2);
        valueCAD.value = (temp * data.rates.CAD / data.rates.GBP).toFixed(2);
        valueJPY.value = (temp * data.rates.JPY / data.rates.GBP).toFixed(2);
        valueUSD.value = (temp * data.rates.USD / data.rates.GBP).toFixed(2);
    });

};
valueJPY.oninput = function(){
    var temp = valueJPY.value;
    Rates( data =>{
        valueINR.value = ( temp * data.rates.INR / data.rates.JPY ).toFixed(2);
        valueGBP.value = (temp * data.rates.GBP / data.rates.JPY).toFixed(2);
        valueCAD.value = (temp * data.rates.CAD / data.rates.JPY).toFixed(2);
        valueUSD.value = (temp * data.rates.USD / data.rates.JPY).toFixed(2);
    });

};
valueUSD.oninput = function(){
    var temp = valueUSD.value;
    Rates( data =>{
        valueINR.value = ( temp * data.rates.INR / data.rates.USD ).toFixed(2);
        valueGBP.value = (temp * data.rates.GBP / data.rates.USD).toFixed(2);
        valueJPY.value = (temp * data.rates.JPY / data.rates.USD).toFixed(2);
        valueCAD.value = (temp * data.rates.CAD / data.rates.USD).toFixed(2);
    });

};
