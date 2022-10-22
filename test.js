let data = [5, 25, 35, -5, 30];

let suman = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    if (sum % 2 == 0 && sum % 3 == 0 && sum % 5 == 0) {
        return 1;
    } else {
        return 0;
    }
};

console.log(suman(data));
