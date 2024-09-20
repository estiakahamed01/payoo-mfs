//add oney to the account
/**
 * S1: add event handler
 * prevent page reload after form submit
 * S2:get money to be added to the acoount balance
 * get the pin number
 * S3: verify the pin number
 */




//step 1: Add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();

    //STEP 2:get money to be added to the acoount
    const addMoneyInput = document.getElementById('input-add-money').value;

    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;

    //Step 3: verify ppin number
    if(pinNumberInput === '1234'){

        //Step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;

        //Step 5 : Add addMoneyInput with balance

        const addMoneyNumber = parseFloat(addMoneyInput)
        const balanceNumber = parseFloat(balance)

        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        //step 6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText= newBalance;
        
    }
    else{
        alert('Failed!! Please Try Again')
    }
})