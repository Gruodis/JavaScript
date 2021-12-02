
// onutes ir petro funkcija
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };
// kito uzdavinio funkcija
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };


  // onute ir petras zaidimo kintamieji
  let randomas = random(5, 10)

  console.log ('randomas', randomas)

  let petras = random(3, 7)
  let onute = random(5, 10)

  if (petras < onute) {

    console.log('onute laimejo',  petras, onute)

  }
  else if (petras > onute) {

    console.log('laimejo petras', petras, onute)

  }
else {

    console.log('lygiosios', petras, onute)
}

// antras zaidimas su ifais ir kintamaisiais
