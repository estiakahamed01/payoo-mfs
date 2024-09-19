// console.log('Button Clicking File Added')


//STEP 1 : set event handler
document.getElementById('button-login').addEventListener('click',function(event){

    //STEP 2 : Prevent Default behaviour
    event.preventDefault(); //Vejal to beginners
    console.log('Login Button Clicked')

    //STEP 3 : get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})