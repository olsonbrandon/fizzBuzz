for (var counter = 1; counter <=100; counter++) {
  if (counter % 3 === 0 && counter % 5 === 0){
    var fizzbuzz = document.createElement("div");
    fizzbuzz.innerHTML = '<h2> FIZZBUZZ! </h2>';
    fizzbuzz.className = 'fizzbuzz';
    document.getElementById('welcome').appendChild(fizzbuzz);
  } else if (counter %3 === 0) {
    var fizzbuzz = document.createElement("div");
    fizzbuzz.innerHTML = '<h2> FIZZ! </h2>';
    fizzbuzz.className = 'fizz';
    document.getElementById('welcome').appendChild(fizzbuzz);
  } else if (counter % 5 === 0){
    var fizzbuzz = document.createElement("div");
    fizzbuzz.innerHTML = '<h2> BUZZ! </h2>';
    fizzbuzz.className = 'buzz';
    document.getElementById('welcome').appendChild(fizzbuzz);

  } else {
    var fizzbuzz = document.createElement("div");
    fizzbuzz.innerHTML = '<h2>'+counter+'</h2>';
    fizzbuzz.className = 'none';
    document.getElementById('welcome').appendChild(fizzbuzz);
  }
}
