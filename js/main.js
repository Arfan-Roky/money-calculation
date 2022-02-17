// income
function income() {
  const income = document.getElementById('income');
  let incomeValue = parseInt(income.value);
  //expensesInputFieldError
  let expensesInputFieldError = document.getElementById(
    'expenses-input-field-error'
  );
  //Error handeling
  let incomeError = document.getElementById('income-error');
  if (income.value == '') {
    incomeError.textContent = 'Error: input field is empty';
    incomeError.style.color = 'red';
    incomeError.style.marginLeft = '10px';
    //expensesInputFieldError
    expensesInputFieldError.style.display = 'none';
    income.value = '';
  } 
  else if (income.value < 0) {
    incomeError.textContent = 'please enter valid number';
    incomeError.style.color = 'red';
    incomeError.style.marginLeft = '10px';
    //expensesInputFieldError
    expensesInputFieldError.style.display = 'none';
    income.value = '';
  }
  return incomeValue;
}

// get expenses input value
function getInputValue(item) {
  const itemCost = document.getElementById(item + '-cost');
  let itemValue = itemCost.value;
  let itemCostAmount = parseInt(itemValue);
  //Error handleing
  let expensesInputFieldError = document.getElementById(
    'expenses-input-field-error'
  );

  if (itemCost.value == '') {
    expensesInputFieldError.textContent =
      'Error: expenses input field in empty';
      itemCost.value = '';
      return;
  } 
  else if (itemCost.value < 0) {
    expensesInputFieldError.textContent = 'Error: please enter valid number!';
    itemCost.value = '';
    return;
  }
  // clear input value
  itemCost.value = '';

  return itemCostAmount;
}

// calculate
document.getElementById('calculate').addEventListener('click', function () {
  // addtion total expenses
  let totalExpenses = document.getElementById('total-expenses');
  let totalExpensesValue = totalExpenses.innerText;
  const totalExpensesAmount = parseInt(totalExpensesValue);

  
  // check Error for total expenses
  if (totalExpensesValue > income()) {
    document.getElementById('greater-expenses-error').textContent =
      'Error: your Expenses money greater than your income!';
  } 
  else if( isNaN(income())){
      return ;
  }

  else { 
  totalExpensesValue =
  totalExpensesAmount +
  getInputValue('food') +
  getInputValue('rent') +
  getInputValue('clothes');
    totalExpenses.innerText = totalExpensesValue;
  }



  // The balance after expensing
  const balance = document.getElementById('balance');
  let balanceValue = balance.innerText;
  let totalBalance = parseInt(balanceValue);

  //check  error for balance
  if(isNaN(income())){
     return;
  }
  else{
  //  total balance
  let getCurrentBalance = income() - totalExpensesValue;
  balance.innerText = totalBalance + getCurrentBalance;

  }
});


// save
document.getElementById('save').addEventListener('click', function () {
  const saveInput = document.getElementById('save-input');
  let saveInputValue = saveInput.value;
  const saveInputAmount = parseInt(saveInputValue);

  const percentage = (income() * saveInputAmount) / 100;

  const saveing = document.getElementById('saving-amount');
  let saveingValue = saveing.innerText;
  const saveingAmount = parseInt(saveingValue);

  //error handeling
  if (percentage < balance() && percentage > 0) {
    saveing.innerText = percentage + saveingAmount;
    document.getElementById('saving-error').style.display = 'none';
  } else if (saveInputValue == '' || saveInputValue < 0) {
    alert('Error: your input field is empty or you enterd invalid number!');
  } else {
    document.getElementById('saving-error').style.display = 'block';
  }

  // remaining balance
  const remainging = document.getElementById('remaining-balance');
  let remaingingValue = parseInt(remainging.innerText);
  remainging.innerText = balance() - saveing.innerText;
});

function balance() {
  const balance = document.getElementById('balance');
  const totalBalance = parseInt(balance.innerText);
  return totalBalance;
}
