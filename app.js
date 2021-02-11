var birthdateRef = document.getElementById("birthday-input");
var output = document.getElementById("output");


function clickHandler() {
    var birthDate = birthdateRef.value;
    var [year, month, day] = birthDate.toString().split('-');
    year = Number(year);
    month = Number(month);
    day = Number(day);
    var digitSum = sumOfDigits(day) + sumOfDigits(month) + sumOfDigits(year);
    if (digitSum > 9) {
        var result = sumOfDigits(digitSum);
        output.innerHTML = "Your Personal Year number is : " + result;
    }
    else {
        output.innerHTML = "Your Personal year number is : " + digitSum;
    }
}

function sumOfDigits(num) {
    var sum = 0;
    while (num != 0) {
        var remainder = num % 10;
        sum = sum + remainder;
        num = Math.floor(num / 10);
    }
    return sum;
}