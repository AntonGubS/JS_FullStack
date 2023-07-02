
function* drawTriangle() {
  for (let i = 1; ; i++) {
    let eachLine = ''
    for (let j = 1; j <= i; j++) {
      eachLine += j + " "
    }
    eachLine = eachLine.trim();
    yield eachLine;
  }
}

let generator_1 = drawTriangle();


function GenerateNumber_1() {
  const div = document.getElementById('root_1');
  const span = document.createElement('span_1');
  let { value } = generator_1.next();
  span.innerHTML = value + '<br/>';
  div.appendChild(span);
}


// функция генератор
function* fibn(т) {
  [a, b] = [0, 1]
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

function* GenerateFibonacci() {
  var fib = fibn();
  for (let i = 1; ; i++) {
    yield fib.next().value;
  }
}

let generator_2 = GenerateFibonacci();

function GenerateNumber_2() {
  const div = document.getElementById('root_2');
  const span = document.createElement('span_2');
  let { value } = generator_2.next();
  span.innerHTML = value + '<br/>';
  div.appendChild(span);
}