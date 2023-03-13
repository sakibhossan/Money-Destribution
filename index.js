
// input value convert into floating Number
function getInputValue(inputIdName) {
    const getValue = document.getElementById(inputIdName);
    const inputNum = parseFloat(getValue.value);
    // invalid warnning
    if ((getValue.value < 0 || isNaN(getValue.value) || getValue.value == '')) {
        return alert('invalid input !');
    }
    return inputNum;
}
// innertext convert into floating number
function getInnerText(number) {
    const innerText = document.getElementById(number);
    const convertNumber = parseFloat(innerText.innerText);
    return convertNumber;
}
// calculate button
document.getElementById('calculate-button').addEventListener('click', function() {
    let income = getInputValue('income-input');
    let food = getInputValue('food-input');
    let rent = getInputValue('rent-input');
    let clothes = getInputValue('clothes-input');
    let cost = food + rent + clothes;
    document.getElementById('total-expenses').innerText = cost;
    let totalCost = getInnerText('total-expenses');
//    invalid data warnning
    if (totalCost >= income) {
        alert('invalid data !');
        document.getElementById('total-expenses').innerText = cost;
        document.getElementById('balance-total').innerText = 'income insufficient';
    }
    else {
        document.getElementById('total-expenses').innerText = cost;
        document.getElementById('balance-total').innerText = income - totalCost;
    }
});

/* money save calculation
bonus marks */
document.getElementById('save-button').addEventListener('click', function() {
    let income = getInputValue('income-input');
    let save = getInputValue('save-input');
    let depositeAmount = income * save / 100;
    document.getElementById('saving-amount').innerText = depositeAmount;
    let balance = getInnerText('balance-total');
    // invalid data warn
    if (depositeAmount >= balance) {
        alert ('insufficient balance !');
        document.getElementById('saving-amount').innerText = "00";
        document.getElementById('remain-balance').innerText = balance;
    }
    else {
        document.getElementById('saving-amount').innerText = depositeAmount;
        document.getElementById('remaining-balance').innerText = balance - depositeAmount;
    }
});