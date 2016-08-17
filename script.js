var input = document.querySelector(".fizzbuzz");

for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        input.innerHTML +="FizzBuzz <br />";
    } else if (i % 3 === 0) {
        input.innerHTML +="Fizz <br />";
    } else if (i % 5 === 0) {
        input.innerHTML +="Buzz <br />";
    } else {
       input.innerHTML += i + "<br />" ;
    }
};
