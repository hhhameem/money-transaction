//accessing components
const totalDepositText = document.getElementById('total-deposit');
const totalWithdrawText = document.getElementById('total-withdraw');
const totalBalanceText = document.getElementById('total-balance');

//inner text to float conversion
let totalDepositAmount = parseFloat(totalDepositText.innerText);
let totalWithdrawAmount = parseFloat(totalWithdrawText.innerText);
let totalBalanceAmount = parseFloat(totalBalanceText.innerText);

//accessing deposit input components
const depositInputText = document.getElementById('deposit-input');
const depositButton = document.getElementById('deposit-button');

//accessing withdraw input components
const withdrawInputText = document.getElementById('withdraw-input');
const withdrawButton = document.getElementById('withdraw-button');

//deposit functionality
depositButton.addEventListener('click', function () {
    const depositInputAmount = parseFloat(depositInputText.value);
    if(isNaN(depositInputAmount)){
       alert('Please Input a Number');
    } else{
        totalDepositAmount = totalDepositAmount + depositInputAmount;
        totalBalanceAmount = totalBalanceAmount + depositInputAmount;
        totalDepositText.innerText = totalDepositAmount;
        totalBalanceText.innerText = totalBalanceAmount;
        depositInputText.value = '';
    }
});

//withdraw functionality
withdrawButton.addEventListener('click', function () {
    const withdrawInputAmount = parseFloat(withdrawInputText.value);
    if(isNaN(withdrawInputAmount)){
       alert('Please Input a Number');
    } else if(withdrawInputAmount > totalBalanceAmount) {
        alert('Not Enough Fund.');
    }
    else{
        totalWithdrawAmount = totalWithdrawAmount + withdrawInputAmount;
        totalBalanceAmount = totalBalanceAmount - withdrawInputAmount;
        totalWithdrawText.innerText = totalWithdrawAmount;
        totalBalanceText.innerText = totalBalanceAmount;
        withdrawInputText.value = '';
    }
});