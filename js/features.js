document.getElementById('btn-show-cash-out').addEventListener('click',function(event){
    //Show cash Out Form
    document.getElementById('cash-out-form').classList.remove('hidden')

    //Hide the cash in form
    document.getElementById('add-money-form').classList.add('hidden')
})

document.getElementById('btn-show-cash-in').addEventListener('click',function(event){
    //Show cash in Form
    document.getElementById('add-money-form').classList.remove('hidden')

    //Hide the cash out form
    document.getElementById('cash-out-form').classList.add('hidden')
})

