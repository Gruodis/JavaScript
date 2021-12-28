function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/////////////////////////////////////////// JavaScript FUNKCIJA //////////////////////////////////////////////////
//
//
// 1. Fubkcija deklaruojama zodziu - function. Funkijos deklaravimui nenaudojame "let" ar "const".
//
//--- 1.a Funkcija gali buti su vardu,
//        pvz.: "function sayHello() { something };"
//
//--- 1.b Funkcija gali buti be vardo,
//        pvz.: (function () { something })();
//
//--- 1.c Funkcija gali buti priskirta kintamajam,
//        pvz.: "let kintamasis = function () { something };"
//
//_______________________________________________________________________________________________________________
//
//
// 2. Funkcijos skliaustuose rasomi parametrai,
//    pvz.: "function sayHello(parametras1, parametras2) {};",
//
//--- 2.a Parametrais gali buti NUMBER, STRING, BOOLEAN, ARRAY, etc.
//
//--- 2.b Parametrams butini Argumentai.
//
//_______________________________________________________________________________________________________________
//
//
// 3. Argumentai nurodomi iskvieciant funkcija,
//    pvz.: sayHello(argumentas8, argumentas9);
//
//--- 3.a Argumentas randasi uz funkcijos ribu pvz.: "let argumentas8 = rand(1, 10);"
//
//--- 3.b Funkcija Argumentu reiksmes perduoda Parametrams,
//        pvz.: function sayHello(parametras1 = argumentas8, parametras2 = argumentas9) {};
//        sayHello(argumentas8, argumentas9);
//
//_______________________________________________________________________________________________________________
//
//
// 4. RETURN grazina viena kintamaji is funkcijos ir ja uzbaigia.
//
//--- 4.a Nors RETURN grazina tik viena kintamaji, tas kintamasis gali buti kompleksinis.
//
//        Pvz.: "function add(a, c, b) { return [a+3, b+3, c+3]}".
//        Auksciau nurodytame pvz., Funkcija grazina viena kintamaji, kuris yra Masyvas turintis "n" reiksmiu.
//
//--- 4.b "if, else if, else" salygu naudojimas su RETURN.
//
//        pvz.: if (a > b) { return a = 'a is MORE than b' };
//              if (a = b) { return a = 'a and b are EQUAL' }; vietoje "else if"
//              return console.log('a and b are EQUAL') ; vietoje "else" arba SWITCH atveju vietoje "default".
//
//        Auksciau esanciame pvz., nenaudojam "ele if" ir "else", nes "RETURN", kaip ir "BREAK",
//        nutraukia tolimesni kodo vykdyma, todel "else if, else" yra pertekliniai.
//
//_______________________________________________________________________________________________________________
//
//
// 5. Fubkcijos iskvietimas vykdomas nurodzius funkcijos varda, skliaustus(skliaustuose nurodomi Parametrai, jeigu jie naudojami),
//    pvz.: sayHello(argumentas8, argumentas9);
//
//_______________________________________________________________________________________________________________
//
//
// 6. Kaip funkcijos grazinta kintamaji su 'n' kiekiu reiksmiu, isskaidyti ir priskirti skirtingiems kintamiesiems?
//    PASTABA. Prisimename, kad su RETURN galime grazinti tik viena kintamaji!
//
//          function add(a, b, c) {
//                   return [a + 3, b + 3, c + 3];
//                   };
//
//    pvz., funkcijoje turime kintamaji: Masyva su reiksmemis [a + 3, b + 3, c + 3],
//    mums reikia kiekvienai is reiksmiu priskirti kintamji su unikaliu vardu.
//
//--- 6.a deklaruojame tiek kintamuju, kiek Masyve turime reiksmiu:
//
//        let [array1, array2, array3] = add(arg1, arg2, arg3);
//
//--- 6.a Tokiu budu gauname rezultata: array1 = arg1, array2 = arg2, array3 = arg3.
//
//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function sayHello(name, count) {
    // funkcijos parametras = kintamasis name ir count, galioja tik funkcijos bloke - {} viduje.
    for (var i = 0; i < count; i++) {
        console.log(`WOOHOOO ${times} Say Hello, to ${name}`);
    }
    console.log(
        `****************************************************************`
    );
    //deklaravimo metu suvesta koda reikia issikviesti atskirai, kad atvaizduoti
}

// console.log('FUN', sayHello, sayHello(), rand(1,99));

let times = rand(0, 10);

sayHello("Adomas", times); // funkcijos Argumentas = Adomas
sayHello("Gabrielius", times); // atvaizdavimas gali buti naudojamas 'n' kartu.
sayHello("Judas", times); // atvaizdavimas gali buti naudojamas 'n' kartu.

/////////////////////////////////////////// Uzdavinys FUNKCIJA sum //////////////////////////////////////////////////
//
// 1. parasyti funkcija, kuri skaiciuotu dvieju argumentu suma.

let argNumber1 = rand(0, 22);
let argNumber2 = rand(1, 10);

let argMathSymbol;

let randMathSymol = ["-", "+", "/", "*"];

argMathSymbol = randMathSymol[rand(0, randMathSymol.length - 1)]; // STRING

argMathSymbol.slice();

function calc(a, c, b) {
    if (c === "-") {
        console.log(`${a}${c}${b} = `, a - b); // nesaugus sprendimas naudoti eval();
        return
    } else if (c === "+") {
        console.log(`${a}${c}${b} = `, a + b); // nesaugus sprendimas naudoti eval()
    } else if (c === "/") {
        console.log(`${a}${c}${b} = `, a / b); // nesaugus sprendimas naudoti eval()
    } else {
        console.log(`${a}${c}${b} = `, a * b); // nesaugus sprendimas naudoti eval()
    }

    // console.log(`${a}${c}${b} = `, eval(a + c +b))// nesaugus sprendimas naudoti eval();
}

calc(argNumber1, argMathSymbol, argNumber2); // funkcijos Argumentai

// for (let i = 0; i < 1; i++) {
//     argMathSymbol = mathSymol[rand(0, mathSymol.length - 1)]; // STRING
// }
// argMathSymbol.slice();




///////////////////////////////////// darome su SWITCH

function calc2(a, c, b) {
    switch (c) {
        case "-":
            console.log(`Antras calc: ${a}${c}${b} = `, a - b); // nesaugus sprendimas naudoti eval();
            break;

        case "+":
            console.log(`Antras calc: ${a}${c}${b} = `, a + b); // nesaugus sprendimas naudoti eval()
            break;

        case "/":
            console.log(`Antras calc: ${a}${c}${b} = `, a / b); // nesaugus sprendimas naudoti eval()
            break;

        case "*":
            console.log(`Antras calc: ${a}${c}${b} = `, a * b); // nesaugus sprendimas naudoti eval()
            break;

        default:
            console.log(`Antras calc: ERROR!!!`); // nesaugus sprendimas naudoti eval()
    }
    // console.log(`${a}${c}${b} = `, eval(a + c +b))// nesaugus sprendimas naudoti eval();
}

calc2(argNumber1, argMathSymbol, argNumber2); // funkcijos Argumentai




function calc3(a, c, b) {
    if (c === "-") {
        return a - b;
    }
    if (c === "+") {
        return a + b;
    }
    if (c === "/") {
        return a / b;
    }
    if (c === "*") {
        return a * b;
    }
    return 'ERROR';


    // console.log(`${a}${c}${b} = `, eval(a + c +b))// nesaugus sprendimas naudoti eval();
};

let ca3 = calc3(argNumber1, argMathSymbol, argNumber2);

console.log(`CALC 3:`, argNumber1, argMathSymbol, argNumber2, ` = `, ca3);