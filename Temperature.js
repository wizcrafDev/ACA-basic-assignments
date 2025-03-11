function Converter(C) {

var fahreinheit = ((C * 9) / 5 )+ 32;


console.log( C +" fahreinheit conversion to celcius is "+ fahreinheit);
}

function ConvertTofahreinheit(F) {

    var celcius = ((F - 32 )* 5) / 9;

    console.log(F+" celcius conversion to fahreinheit is "+ Math.round(celcius));
}

Converter(100);
ConvertTofahreinheit(80);

