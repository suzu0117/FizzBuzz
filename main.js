let fizzbuzz = (count) => {
  if (count % 15 === 0) {
    return '1';
  } else if (count % 3 === 0) {
    return '2';
  } else if (count % 5 === 0) {
    return '3';
  } else {
    return '4';
  }
};

let btn = document.querySelector('#btn');
let result = document.querySelector('.result');

btn.addEventListener('click', () => {
  let number_input = Number(document.getElementById('number_input').value);

  for (let i = 1; i <= number_input; i++) {
    let p = document.createElement('p');
    p.textContent = i;
    result.appendChild(p);
    let Fizz_img = document.createElement('img');
    let Buzz_img = document.createElement('img');

    if (fizzbuzz(i) === '1') {
      Fizz_img.src = './image/Fizz.jpg';
      Buzz_img.src = './image/Buzz.jpg';
      result.appendChild(Fizz_img);
      result.appendChild(Buzz_img);
    } else if (fizzbuzz(i) === '2') {
      Fizz_img.src = './image/Fizz.jpg';
      result.appendChild(Fizz_img);
    } else if (fizzbuzz(i) === '3') {
      Buzz_img.src = './image/Buzz.jpg';
      result.appendChild(Buzz_img);
    }
  }
});