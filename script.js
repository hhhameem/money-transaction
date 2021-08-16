function updateValues(updateValueAmount, updateValueText, updateValueInputAmount) {
    //update the existing total withdraw/deposit balance with input amount
    updateValueAmount = updateValueAmount + updateValueInputAmount;
    updateValueText.innerText = updateValueAmount;
}

function updateTotalBalance(totalBalanceAmount, updateValueInputAmount, totalBalanceText, isAdd) {
    if (isAdd) {
        //for deposite functionality
        totalBalanceAmount = totalBalanceAmount + updateValueInputAmount;
        totalBalanceText.innerText = totalBalanceAmount;
    } else {
        //for withdraw functionality
        totalBalanceAmount = totalBalanceAmount - updateValueInputAmount;
        totalBalanceText.innerText = totalBalanceAmount; 
    }
}

function getValuesAndErrorCheck(totalTransactionAmount, transactionAmountInput, isAdd) {
    //get the existing values from text field
    const updateValueText = document.getElementById(totalTransactionAmount);
    let updateValueAmount = parseFloat(updateValueText.innerText);

    //get the input value
    const updateValueInputText = document.getElementById(transactionAmountInput);
    const updateValueInputAmount = parseFloat(updateValueInputText.value);

    //get the existing total balance
    const totalBalanceText = document.getElementById('total-balance');
    let totalBalanceAmount = parseFloat(totalBalanceText.innerText);

    //check if input value is number or greate than 0
    if(isNaN(updateValueInputAmount) || updateValueInputAmount < 0){
       alert('Please Input a Positive Number');
       updateValueInputText.value = '';
    } else {
        updateValueInputText.value = '';
        //check if we want to withdraw or deposite balance
        if (isAdd) {
            updateValues(updateValueAmount, updateValueText, updateValueInputAmount);
            updateTotalBalance(totalBalanceAmount, updateValueInputAmount, totalBalanceText, isAdd)
        } else {
            //check if there is sufficient value to withdraw
            if (updateValueInputAmount <= totalBalanceAmount ) {
                updateValues(updateValueAmount, updateValueText, updateValueInputAmount);
                updateTotalBalance(totalBalanceAmount, updateValueInputAmount, totalBalanceText, isAdd)
            }
            else{
                alert("Insufficient Fund");
                updateValueInputText.value = '';
            }
            
        }
    }
}

//deposit functionality
document.getElementById('deposit-button').addEventListener('click', function () {
    getValuesAndErrorCheck('total-deposit', 'deposit-input', true);
});

//withdraw functionality
document.getElementById('withdraw-button').addEventListener('click', function () {
    getValuesAndErrorCheck('total-withdraw', 'withdraw-input', false);
});