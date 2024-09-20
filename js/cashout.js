document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    if(pinNumber==='1234'){
        const balance = document.getElementById('account-balance').innerText
        console.log(balance)

        const balanceNumber = parseFloat(balance);
        const cashoutNumber = parseFloat(cashOut);

        const updateBalance = balanceNumber - cashoutNumber;

        document.getElementById('account-balance').innerText = updateBalance;

    }
    else{
        alert('Failed!! Please Try Again')
    }

})