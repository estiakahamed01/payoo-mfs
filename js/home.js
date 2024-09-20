//add oney to the account
/**
 * S1: add event handler
 * prevent page reload after form submit
 * S2:get money to be added to the acoount balance
 */




//step 1: Add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();

    //STEP 2:get money to be added to the acoount
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
})